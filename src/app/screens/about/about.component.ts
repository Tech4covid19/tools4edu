import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from '../../shared/google-analytics/ga.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private ga: GoogleAnalyticsService
  ) { }

  ngOnInit() {
    this.ga.recordPageView('Sobre', '/sobre');
  }

}
