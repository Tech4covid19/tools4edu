import { Component, OnInit } from '@angular/core';
import { ContentItemService } from 'src/app/store/content-item.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  videos$: any;

  constructor(private service: ContentItemService) { }

  ngOnInit() {
    const ids = []
    this.videos$ =  this.service.getContentItems(ids, [ ])
  }

}
