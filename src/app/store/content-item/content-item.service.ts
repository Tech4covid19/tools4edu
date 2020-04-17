import { Injectable } from '@angular/core';
import { ContentItemStore, ContentItemState } from './content-item.store';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { map, tap } from 'rxjs/operators';

const GET_CONTENT_ITEMS_QUERY = gql`
  query getContentItems($stakeholdersIds: [String!], $providersIds: [String!], $tagIds: [String!]) {
    contentItems(
      stakeholderIds:$stakeholdersIds,
      providerIds:$providersIds,
      tagIds:$tagIds
      startAt:0
    ) {
      id,
      title,
      text,
      slug
      videoUrl,
      videoTime,
      imageUrl,
      type,
      published,
      stakeholder{
        title,
        code,
        id
      },
      provider {
        title,
        code,
        id
      },
      tags {
        title,
        code,
        id
      }
    }

  }`;

const GET_CONTENT_ITEM_QUERY = gql`
  query getContent($slug: String!) {
    contentItem(
      slug:$slug
    ) {
      id,
      title,
      text,
      slug
      videoUrl,
      videoTime,
      imageUrl,
      published,
      stakeholder{
        title,
        code,
        id
      },
      provider {
        title,
        code,
        id
      },
      tags {
        title,
        id
      }
    }

  }`;

const GET_FAQS = gql `
  query getFaqs($providerIds: [String!], $stakeholderIds: [String!]) {
    faqs(providerIds: $providerIds, stakeholderIds: $stakeholderIds){
      id,
      order,
      question,
      answer,
      published,
      stakeholder {
        id
        code
        title
        description
      }
    }
  }`;

@Injectable({ providedIn: 'root' })
export class ContentItemService extends NgEntityService<ContentItemState> {
  query: any;

  constructor(protected store: ContentItemStore, private apollo: Apollo) {
    super(store);
  }

  getContentItems(stakeholderIds, providersIds, tagIds) {
    return this.apollo
      .watchQuery({
        query: GET_CONTENT_ITEMS_QUERY,
        variables: {
          stakeholdersIds: stakeholderIds,
          providersIds: providersIds,
          tagIds: tagIds,
        }
    })
    .valueChanges.pipe(
      map((result:any) => result.data.contentItems.filter(ci => ci.published) ),
      tap((contentItems:any) => this.store.set(contentItems) ),
    )
  }

  getContentItem(slug) {
    return this.apollo
      .watchQuery({
          query: GET_CONTENT_ITEM_QUERY,
          variables: {
            slug: slug
          }
      })
      .valueChanges.pipe(
        map((result:any) => result.data.contentItem),
        tap((contentItem:any) => [
          this.store.add(contentItem),
          this.store.setActive(contentItem.id)
        ]),
      )
  }

  getFaqs(stakeholderIds, providerIds) {
    return  this.apollo
      .watchQuery({
        query: GET_FAQS,
        variables: {
          stakeholderIds: stakeholderIds,
          providerIds: providerIds
        }
      })
      .valueChanges.pipe(
        map((result:any) => result.data.faqs.filter(f => f.published) )
      )
  }
}
