import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ContentItemStore } from 'src/app/store/content-item/content-item.store';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit, OnChanges {
  @Input( 'data' ) data
  item: any;
  constructor(private router: Router, private store: ContentItemStore) { }


  ngOnChanges(changes: SimpleChanges): void {
      if(this.data)
        this.item = this.data

  }

  ngOnInit() {
    console.log(this.data)
  }
  navigateTo() {
    this.store.setActive(this.data.id)
    this.router.navigate([this.data.stakeholder.code.toLowerCase(), this.data.slug])
  }
}
