import { Component, OnInit } from '@angular/core';
import { ContentItemQuery } from '../../store/content-item/content-item.query';
import { GoogleAnalyticsService } from '../../shared/google-analytics/ga.service';

@Component({
  selector: 'app-content-article',
  templateUrl: './content-article.component.html',
  styleUrls: ['./content-article.component.scss']
})
export class ContentArticleComponent implements OnInit {

  article: any;

  constructor(private query: ContentItemQuery, private ga: GoogleAnalyticsService) { }

  ngOnInit() {
    this.article = this.query.getActive();
    this.ga.recordPageView(this.article.title, `/conteudo/${this.article.slug}`);
  }

}
