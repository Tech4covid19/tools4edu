import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';
import { BlogArticleService } from '../../store/blog-article/blog-article.service';
import { GoogleAnalyticsService } from '../../shared/google-analytics/ga.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  stakeholders$: any;
  blogArticles$: any;

  constructor(
    private router: Router, private apollo: Apollo, private blogArticlesService: BlogArticleService, private ga: GoogleAnalyticsService
  ) { }

  ngOnInit() {

    this.ga.recordPageView('Home', '/');

    this.stakeholders$ = this.apollo
     .watchQuery({
       query: gql`{
        stakeholders{
          id,
          title,
          order
        }
       }`,
     }) .valueChanges.pipe(map((result:any) =>
     result.data.stakeholders
      )
    )

    this.blogArticles$ = this.blogArticlesService.getBlogArticlesForHome();
  }
  goTo(stakeholder) {
    this.router.navigate(['conteudo'], { queryParams: { filter: stakeholder } })
  }
}
