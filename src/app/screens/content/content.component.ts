import { Component, OnInit } from '@angular/core';
import { map, filter } from 'rxjs/operators';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

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

  constructor(private apollo: Apollo, private route: ActivatedRoute) { 
    this.query = gql`
    query getContent($stakeholdersIds: [String!]) {
     contentItems(
      stakeholderIds:$stakeholdersIds,
      providerIds:[],
      limit:8,
      startAt:0
    ) {
      id,
      title,
      text,
      videoUrl,
      videoTime,
      stakeholder{
        title,
        id
      },
      provider {
        title,
        id
      },
      tags {
        title,
        id
      }
    }
  
  }`;
  }

  
  ngOnInit() {
    this.route.queryParams
    .subscribe( params => { 

        this.videos$ =  this.apollo
       .watchQuery({
         query: this.query,
         variables: {
          stakeholdersIds: params.filter
        }
       })
       .valueChanges.pipe(map((result:any) => 
           result.data.contentItems
       )
       )
      })
    
     this.stakeholder$ = this.apollo
     .watchQuery({
       query: gql`{
        stakeholders{
          id,
          title,
        }
       }`,
     }) .valueChanges.pipe(map((result:any) => 
     result.data.stakeholders
      )
    )  
       
   }
   getSelected(event){
     console.log(event)
     if(event.add)
      this.stakeholderIds.push(event.data.id)
     if(!event.add) {
      const index = this.stakeholderIds.indexOf(event.data.id) 
      if (index !== -1) this.stakeholderIds.splice(index, 1);
     }
     this.unique = [...new Set(this.stakeholderIds)];
     this.query = gql`
     query getContent($stakeholdersIds: [String!]) {
      contentItems(
       stakeholderIds:$stakeholdersIds,
       providerIds:[],
       limit:8,
       startAt:0
     ) {
       id,
       title,
       text,
       videoUrl,
       videoTime,
       stakeholder{
         title,
         id
       },
       provider {
         title,
         id
       },
       tags {
         title,
         id
       }
     }
   
   }`;
     this.videos$ =  this.apollo
     .watchQuery({
       query: this.query,
       variables: {
         stakeholdersIds: this.unique
       }
  
     })
     .valueChanges.pipe(map((result:any) => 
        result.data.contentItems
     ))
   }

}
