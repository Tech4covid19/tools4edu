import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ContentItemQuery } from 'src/app/store/content-item/content-item.query';
import { Observable } from 'apollo-link';
import { ContentItem } from 'src/app/store/content-item/content-item.model';
import { GoogleAnalyticsService } from '../../shared/google-analytics/ga.service';
@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.scss']
})
export class AlunoComponent implements OnInit {

  videos$: any;


  constructor(private query: ContentItemQuery, private ga: GoogleAnalyticsService) {

   }

  ngOnInit() {
    this.videos$ = this.query.selectActive()
    this.videos$.subscribe((item) => {
      this.ga.recordPageView(item.title, `/aluno/${item.slug}`);
    })
  }


}
