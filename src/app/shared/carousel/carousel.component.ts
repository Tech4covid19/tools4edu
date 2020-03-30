import { Component, OnInit, Input } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input () customOptions = '';
  testimonies$: any;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.testimonies$ =  this.apollo
    .watchQuery({
      query: gql`
      {
        testimonies{
          text,
          author,
          occupation
        }
      }
      `,
    })
    .valueChanges.pipe(map((result:any) => 
        result.data.testimonies
    )
    )
  }

}
