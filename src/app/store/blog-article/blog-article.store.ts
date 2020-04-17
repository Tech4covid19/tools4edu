import { Injectable } from '@angular/core';
import { BlogArticle } from './blog-article.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface BlogArticleState extends EntityState<BlogArticle> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'blogArticle' })
export class BlogArticleStore extends EntityStore<BlogArticleState> {

  constructor() {
    super();
  }

}

