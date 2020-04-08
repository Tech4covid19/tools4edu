import { Component, OnInit } from '@angular/core';
import { map, filter } from 'rxjs/operators';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import { ContentItemStore } from 'src/app/store/content-item/content-item.store';
import { ContentItemService } from 'src/app/store/content-item/content-item.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  videos$: any;
  stakeholder: string = null;
  stakeholder$: any;
  stakeholderIds: any[] = []
  query: any
  unique: any[];
  providers$: any;
  uniqueProvider: any[];
  providerArray: any[] = [];
  tags$: any;
  uniqueTags: any[];
  tagArray: any[] = [];

  constructor(private service: ContentItemService, private route: ActivatedRoute, private apollo: Apollo) {

  }


  ngOnInit() {
    this.route.queryParams
    .subscribe( params => {
        let ids = (params.filter === 'all') ? [] : params.filter
        this.videos$ =  this.service.getContentItems(ids, [], [])

      })

     this.stakeholder$ = this.apollo
     .watchQuery({
       query: gql`{
        stakeholders{
          id,
          title,
          code,
          order
        }
       }`,
     }) .valueChanges.pipe(map((result:any) =>
     result.data.stakeholders
      )
    )
    this.providers$ = this.apollo
    .watchQuery({
      query: gql`{
       providers{
         id,
         title,
         code,
         order
       }
      }`,
    }) .valueChanges.pipe(map((result:any) =>
    result.data.providers
     )
   )
   this.tags$ = this.apollo
    .watchQuery({
      query: gql`{
        contentTags{
          id,
          title,
          description,
          code,
          order
        }
      }`
    }).valueChanges.pipe(map((result:any) =>
    result.data.contentTags
     )
   )
   }
   getSelected(event){
     console.log(event);

     if(event.add && event.data.__typename.toLowerCase() === 'stakeholder')
      this.stakeholderIds.push(event.data.id)

     if(!event.add && event.data.__typename.toLowerCase() === 'stakeholder') {
      const index = this.stakeholderIds.indexOf(event.data.id)
      if (index !== -1) this.stakeholderIds.splice(index, 1);
     }

     this.unique = [...new Set(this.stakeholderIds)];

     if(event.add && event.data.__typename.toLowerCase() === 'provider') {
      this.providerArray.push(event.data.id)
     }

     if(!event.add && event.data.__typename.toLowerCase() === 'provider') {
      const index = this.providerArray.indexOf(event.data.id)
      if (index !== -1) this.providerArray.splice(index, 1);
     }

      this.uniqueProvider = [...new Set(this.providerArray)];

     if (event.add && event.data.__typename.toLowerCase() === 'contenttag') {
       this.tagArray.push(event.data.id);
     }

     if (!event.add && event.data.__typename.toLowerCase() === 'contenttag') {
       const index = this.tagArray.indexOf(event.data.id);
       if (index !== -1) this.tagArray.splice(index, 1);
     }

     this.uniqueTags = [...new Set(this.tagArray)];

      this.videos$ = this.service.getContentItems(this.unique, this.uniqueProvider, this.uniqueTags)
    }

}
