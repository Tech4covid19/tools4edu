import { Component, OnInit } from '@angular/core';
import { ContentItemService } from 'src/app/store/content-item/content-item.service';
import { BlogArticleService } from '../../store/blog-article/blog-article.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogArticles$: any;

  constructor(private service: BlogArticleService) { }

  ngOnInit() {
    this.blogArticles$ =  this.service.getBlogArticles()
  }

}
