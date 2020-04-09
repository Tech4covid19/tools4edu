import { Component, OnInit, Input } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  carouselOptions: OwlOptions = {
    items: 4,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    // dots: true,
    nav: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 2
      },
      1220: {
        items: 3
      }
    },
  }
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
