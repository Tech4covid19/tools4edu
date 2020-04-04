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
  query: any = `{
    provider(code:"ZOOM") {
      title,
      description,
      videos {
        videoUrl,
        title,
        time,
        description,
        stakeholder {
          title,
          description
        }
      }
    }
   }`;

  constructor(private apollo: Apollo, private route: ActivatedRoute) { }

  
  ngOnInit() {
    this.route.queryParams
    .subscribe( params => { 
        if(params.filter !== 'all') {
          this.query = `{
            provider(code:"ZOOM") {
              title,
              description,
              videos(stakeholder:"${params.filter.toUpperCase()}") {
                id,
                videoUrl,
                title,
                time,
                description,
                stakeholder {
                  title,
                  description
                }
              }
            }
           }`
        } else {
          this.query = `{
            provider(code:"ZOOM") {
              title,
              description,
              videos {
                id,
                videoUrl,
                title,
                time,
                description,
                stakeholder {
                  title,
                  description
                }
              }
            }
           }`
        }
        this.videos$ =  this.apollo
       .watchQuery({
         query: gql`
          ${this.query}
         `,
       })
       .valueChanges.pipe(map((result:any) => 
           result.data.provider.videos
       )
       )
      })
    
       
       
   }


}
