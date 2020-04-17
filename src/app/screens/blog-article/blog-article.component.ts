import { Component, OnInit } from '@angular/core';
import { BlogArticleQuery } from 'src/app/store/blog-article/blog-article.query';
import { BlogArticle } from 'src/app/store/blog-article/blog-article.model';
import { GoogleAnalyticsService } from '../../shared/google-analytics/ga.service';

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.scss']
})
export class BlogArticleComponent implements OnInit {
  article: any;

  constructor(
    private query: BlogArticleQuery,
    private ga: GoogleAnalyticsService
  ) { }

  ngOnInit() {
    this.article = this.query.getActive();

    this.ga.recordPageView(this.article.title, `/blog/${this.article.slug}`)
  }

}
