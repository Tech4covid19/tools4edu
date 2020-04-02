import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.scss']
})
export class AlunoComponent implements OnInit {
  videos: any;
  videos$: any;

  constructor(private apollo: Apollo, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

   this.videos$ =  this.apollo
      .watchQuery({
        query: gql`
        {
          provider(code: "ZOOM") {
            videos {
              title,
              description,
              time,
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
          result.data.provider.videos.filter( video => video.stakeholder.title === "Aluno")
      )
      )
  }


}
