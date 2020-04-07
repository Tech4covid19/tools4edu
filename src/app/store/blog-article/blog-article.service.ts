import { Injectable } from '@angular/core';
import { BlogArticleStore } from './blog-article.store';
import { map, tap } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const GET_BLOG_ARTICLES = gql`
  query GetBlogArticles {
    blogArticles {
      title,
      author,
      images,
      text,
      slug,
      published,
     
    }
  }
`;

const GET_BLOG_ARTICLE = gql`
  query GetBlogArticle($slug: String!) {
    blogArticle(slug: $slug) {
      title,
      author,
      images,
      text,
      slug,
      published,
     
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
          slug
        }
      })
      .valueChanges
      .pipe(
        tap(( result: any ) => [
          this.store.add(result.data.blogArticle),
          this.store.setActive(result.data.blogArticle.slug)
        ]),
        map( (result: any) => result.data.blogArticle )
      )
  }
}
