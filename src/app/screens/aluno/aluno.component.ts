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
  query: any;

  constructor(private apollo: Apollo, private route: ActivatedRoute) {
    this.query = gql`
    
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
