import { Injectable } from '@angular/core';
import { ContentItem } from './content-item.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface ContentItemState extends EntityState<ContentItem> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'contentItem' })
export class ContentItemStore extends EntityStore<ContentItemState> {

  constructor() {
    super();
  }

}

