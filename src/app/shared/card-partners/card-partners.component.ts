import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-partners',
  templateUrl: './card-partners.component.html',
  styleUrls: ['./card-partners.component.scss']
})
export class CardPartnersComponent implements OnInit {
  @Input() logos
  constructor() { }

  ngOnInit() {
    
  }

}
