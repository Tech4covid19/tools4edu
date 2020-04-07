import { Component, OnInit } from '@angular/core';
import { ContentItemQuery } from 'src/app/store/content-item.query';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.scss']
})
export class ProfessorComponent implements OnInit {
  videos$: any;
  constructor(private query: ContentItemQuery) {

  }

 ngOnInit() {
   this.videos$ = this.query.selectActive()
 }
}
