import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'apollo-link';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.scss']
})
export class ProfessorComponent implements OnInit {
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
       this.videos$         
       .subscribe(arg => console.log(arg));
       
   }
  
}
