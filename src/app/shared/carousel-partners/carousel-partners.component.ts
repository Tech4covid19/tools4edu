import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel-partners',
  templateUrl: './carousel-partners.component.html',
  styleUrls: ['./carousel-partners.component.scss']
})
export class CarouselPartnersComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {
  }

}
