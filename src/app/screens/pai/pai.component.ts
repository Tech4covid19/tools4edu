import { Component, OnInit } from '@angular/core';
import { ContentItemQuery } from 'src/app/store/content-item/content-item.query';
import { GoogleAnalyticsService } from '../../shared/google-analytics/ga.service';


@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.scss']
})
export class PaiComponent implements OnInit {

  videos$: any;
  constructor(private query: ContentItemQuery, private ga: GoogleAnalyticsService) {

  }

 ngOnInit() {
   this.videos$ = this.query.selectActive();
   this.ga.recordPageView(this.videos$.title, `/pais/${this.videos$.slug}`);
 }
}
