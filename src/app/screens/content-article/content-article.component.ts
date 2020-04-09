import { Component, OnInit } from '@angular/core';
import { ContentItemQuery } from '../../store/content-item/content-item.query';

@Component({
  selector: 'app-content-article',
  templateUrl: './content-article.component.html',
  styleUrls: ['./content-article.component.scss']
})
export class ContentArticleComponent implements OnInit {

  article: any;

  constructor(private query: ContentItemQuery) { }

  ngOnInit() {
    this.article = this.query.getActive();
  }

}
