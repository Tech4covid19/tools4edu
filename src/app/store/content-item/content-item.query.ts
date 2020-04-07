import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ContentItemStore, ContentItemState } from './content-item.store';

@Injectable({ providedIn: 'root' })
export class ContentItemQuery extends QueryEntity<ContentItemState> {

  constructor(protected store: ContentItemStore) {
    super(store);
  }

}
