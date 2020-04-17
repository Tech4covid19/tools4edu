import { Injectable } from '@angular/core';
import { BlogArticleStore } from './blog-article.store';
import { map, take, tap } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const GET_BLOG_ARTICLES = gql`
  query GetBlogArticles {
    blogArticles {
      id,
      title,
      author,
      images,
      text,
      slug,
      summary,
      published,
      createdAt
    }
  }
`;

const GET_BLOG_ARTICLE = gql`
  query GetBlogArticle($slug: String!) {
    blogArticle(slug: $slug) {
      id,
      title,
      author,
      images,
      text,
      slug,
      summary,
      published,
      createdAt
    }
  }
`;

@Injectable({ providedIn: 'root' })
export class BlogArticleService {

  query: any;

  constructor(private store: BlogArticleStore,
              private apollo: Apollo) {
  }

  getBlogArticlesForHome() {
    // TODO: Add Limit variable to BlogArticles
    return this.apollo
      .watchQuery({
        query: GET_BLOG_ARTICLES
      })
      .valueChanges
      .pipe(
        map((result: any) => result.data.blogArticles.filter(ba => ba.published)),
        take(3)
      )
  }

  getBlogArticles () {
    return this.apollo
      .watchQuery({
        query: GET_BLOG_ARTICLES
      })
      .valueChanges
      .pipe(
        map((result: any) => result.data.blogArticles.filter(ba => ba.published) ),
        tap((blogArticles: any) => this.store.set(blogArticles))
      );
  }

  getBlogArticle (slug) {
    return this.apollo
      .watchQuery({
        query: GET_BLOG_ARTICLE,
        variables: {
          slug: slug
        }
      })
      .valueChanges
      .pipe(
        map( (result: any) => result.data.blogArticle),
        tap(( blogArticle: any ) => [
          this.store.add(blogArticle),
          this.store.setActive(blogArticle.id)
        ])
      )
  }
}
