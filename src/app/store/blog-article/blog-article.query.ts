import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { BlogArticleStore, BlogArticleState } from './blog-article.store';

@Injectable({ providedIn: 'root' })
export class BlogArticleQuery extends QueryEntity<BlogArticleState> {

  constructor(protected store: BlogArticleStore) {
    super(store);
  }

}
