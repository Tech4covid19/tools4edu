import { Component, OnInit } from '@angular/core';
import { BlogArticleQuery } from 'src/app/store/blog-article/blog-article.query';
import { BlogArticle } from 'src/app/store/blog-article/blog-article.model';

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.scss']
})
export class BlogArticleComponent implements OnInit {
  article: any;

  constructor(private query: BlogArticleQuery) { }

  ngOnInit() {
    this.article = this.query.getActive();
  }

}
