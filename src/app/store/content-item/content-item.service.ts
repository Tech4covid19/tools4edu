import { Injectable } from '@angular/core';
import { ContentItemStore, ContentItemState } from './content-item.store';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ContentItemService extends NgEntityService<ContentItemState> {
  query: any;

  constructor(protected store: ContentItemStore, private apollo: Apollo) {
    super(store);
  }
  getContentItems(stakeholderIds, providersIds, tagIds) {
    this.query = gql`
    query getContent($stakeholdersIds: [String!], $providersIds: [String!], $tagIds: [String!]) {
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
    return  this.apollo
    .watchQuery({
      query: this.query,
      variables: {
        stakeholdersIds: stakeholderIds,
        providersIds: providersIds,
        tagIds: tagIds,
      }

    })
    .valueChanges.pipe(tap((result:any) =>
       this.store.set(result.data.contentItems)
    ), map((result:any) => result.data.contentItems ))
  }
  getContentItem(slug){
    this.query = gql`
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

  return  this.apollo
  .watchQuery({
    query: this.query,
    variables: {
      slug: slug
    }

  })
  .valueChanges.pipe(tap((result:any) => [
     this.store.add(result.data.contentItem),
     this.store.setActive(result.data.contentItem.id)
  ]), map((result:any) => result.data.contentItem ))
  }

  getFaqs(stakeholderIds, providerIds) {
    this.query = gql `
  query getContent($providerIds: [String!], $stakeholderIds: [String!]) {
    faqs(providerIds: $providerIds, stakeholderIds: $stakeholderIds){
      id,
      order,
      question,
      answer,

      stakeholder {
        id
        code
        title
        description
      }
    }
    }`;
    return  this.apollo
  .watchQuery({
    query: this.query,
    variables: {
      stakeholderIds: stakeholderIds,
      providerIds: providerIds
    }

  })
  .valueChanges.pipe(map((result:any) => result.data.faqs ))
  }
}
