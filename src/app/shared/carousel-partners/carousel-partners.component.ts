import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-partners',
  templateUrl: './carousel-partners.component.html',
  styleUrls: ['./carousel-partners.component.scss']
})
export class CarouselPartnersComponent implements OnInit {
  @Input () customOptions = '';

  constructor() { }

  ngOnInit() {
  }

}
