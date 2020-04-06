import { Component, OnInit, Query } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';
import { Observable } from 'apollo-link';
import { Subscription } from 'apollo-client/util/Observable';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.scss']
})
export class PaiComponent implements OnInit {

  videos$: any;
  query: any;

  constructor(private apollo: Apollo, private route: ActivatedRoute) {    this.query = gql`
    
  query getVideo {
     contentItems {
       id
       title
       text
       videoUrl
       videoTime
       stakeholder {
         title
       }
     }
   }
 
 `;
}

ngOnInit() {

 this.videos$ =  this.apollo
 .watchQuery({
   query: this.query,
   variables: {
     videoId: this.route.snapshot.params.id
   }
 })
 .valueChanges.pipe(map((result:any) => 
     result.data.contentItems.find(item => item.id === this.route.snapshot.params.id)
 )
 )
}
}
