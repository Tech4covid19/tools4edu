import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from '../../shared/google-analytics/ga.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {

  constructor(private ga: GoogleAnalyticsService) { }

  ngOnInit() {
    this.ga.recordPageView('Privacidade', '/privacidade');
  }

}
