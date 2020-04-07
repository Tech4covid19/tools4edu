import { Component, OnInit } from '@angular/core';
import { ContentItemQuery } from 'src/app/store/content-item/content-item.query';


@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.scss']
})
export class PaiComponent implements OnInit {

  videos$: any;
  constructor(private query: ContentItemQuery) {

  }

 ngOnInit() {
   this.videos$ = this.query.selectActive()
 }
}
