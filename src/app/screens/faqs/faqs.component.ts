import { Component, OnInit } from '@angular/core';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { ContentItemService } from 'src/app/store/content-item/content-item.service';
import { GoogleAnalyticsService } from '../../shared/google-analytics/ga.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FAQsComponent implements OnInit {
  stakeholderIds: any = []
  unique: unknown[] = []
  providerArray: any = []
  uniqueProvider: unknown[];

  stakeholder$: any;
  providers$: any;
  tags$: any;
  faqs$: any;
  faqs: any
  constructor(private apollo: Apollo, private service: ContentItemService, private ga: GoogleAnalyticsService) { }

  ngOnInit() {

    this.ga.recordPageView('Faqs', '/faqs');

    const professorId = '5e7cdd531c9d44000054f369'
    const providerId = '5e7cdc4c1c9d44000054f367'
    // this.stakeholderIds.push(professorId)
    // this.providerArray.push(providerId)
    this.faqs$ = this.service.getFaqs( this.stakeholderIds, this.providerArray)
     this.faqs$
       .subscribe(arg => this.faqs = arg);

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
    console.log(event)
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
     this.faqs$ = this.service.getFaqs(  this.stakeholderIds, this.providerArray)

     this.faqs$.subscribe( res => this.faqs = res)
   }
}
