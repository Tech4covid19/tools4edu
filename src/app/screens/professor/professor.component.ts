import { Component, OnInit } from '@angular/core';
import { ContentItemQuery } from 'src/app/store/content-item/content-item.query';
import { GoogleAnalyticsService } from '../../shared/google-analytics/ga.service';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.scss']
})
export class ProfessorComponent implements OnInit {
  videos$: any;
  constructor(private query: ContentItemQuery, private ga: GoogleAnalyticsService) {

  }

 ngOnInit() {
   this.videos$ = this.query.selectActive()
   this.ga.recordPageView(this.videos$.title, `/professor/${this.videos$.slug}`);
 }
}
