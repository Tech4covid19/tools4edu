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

  constructor(private apollo: Apollo, private route: ActivatedRoute) { }

  ngOnInit() {

    this.videos$ =  this.apollo
    .watchQuery({
      query: gql`
      {
       
          video(id: "${this.route.snapshot.params.id}") {
            title,
            description,
            videoUrl,
            time,
            stakeholder {
              title
            }
          }
        
      }
      `,
    })
    .valueChanges.pipe(map((result:any) => 
        result.data.video
    )
    )
  }


}
