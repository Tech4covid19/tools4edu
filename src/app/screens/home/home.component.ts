import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  stakeholders$: any;
  constructor(private router: Router, private apollo: Apollo) { }

  ngOnInit() {
    this.stakeholders$ = this.apollo
     .watchQuery({
       query: gql`{
        stakeholders{
          id,
          title,
        }
       }`,
     }) .valueChanges.pipe(map((result:any) => 
     result.data.stakeholders
      )
    )  
  }
  goTo(stakeholder) {
    this.router.navigate(['conteudo'], { queryParams: { filter: stakeholder } })
  }
}
