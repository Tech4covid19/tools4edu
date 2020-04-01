import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.scss']
})
export class AlunoComponent implements OnInit {
  videos: any;
  videos$: any;

  constructor(private apollo: Apollo) { }

  ngOnInit() {

   this.videos$ =  this.apollo
      .watchQuery({
        query: gql`
        {
          provider(code: "ZOOM") {
            videos(stakeholder:"ALUNO") {
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
