import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'apollo-link';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.scss']
})
export class ProfessorComponent implements OnInit {
  videos$: any;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.videos$ =  this.apollo
    .watchQuery({
      query: gql`
      {
        provider(code: "ZOOM") {
          videos(stakeholder:"PROFESSOR") {
            title,
            description
            videoUrl,
            time,
            stakeholder {
              title
            }
          }
        }
      }
      `,
    })
    .valueChanges.pipe(map((result:any) => 
        result.data.provider.videos
    )
    )
  }

}
