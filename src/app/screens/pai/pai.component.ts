import { Component, OnInit, Query } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';
import { Observable } from 'apollo-link';
import { Subscription } from 'apollo-client/util/Observable';


@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.scss']
})
export class PaiComponent implements OnInit {

  videos$: any;

  constructor(private apollo: Apollo) { }

  
  ngOnInit() {

    this.videos$ =  this.apollo
       .watchQuery({
         query: gql`
         {
           provider(code: "ZOOM") {
             videos {
               title,
               description
               videoUrl,
               stakeholder {
                 title
               }
             }
           }
         }
         `,
       })
       .valueChanges.pipe(map((result:any) => 
           result.data.provider.videos.filter( video => video.stakeholder.title === "Pais")
       )
       )
   }
   
  
}
