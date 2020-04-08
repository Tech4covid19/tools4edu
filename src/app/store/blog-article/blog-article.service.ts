import { Injectable } from '@angular/core';
import { BlogArticleStore } from './blog-article.store';
import { map, tap } from 'rxjs/operators';
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

  getBlogArticles () {
    return this.apollo
      .watchQuery({
        query: GET_BLOG_ARTICLES
      })
      .valueChanges
      .pipe(
        tap((result: any) => this.store.set(result.data.blogArticles)),
        map((result: any) => result.data.blogArticles)
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
        tap(( result: any ) => [
          console.log(result),
          this.store.add(result.data.blogArticle),
          this.store.setActive(result.data.blogArticle.id)
        ]),
        map( (result: any) => result.data.blogArticle )
      )
  }
}
