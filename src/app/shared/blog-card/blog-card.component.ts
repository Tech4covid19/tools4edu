import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit, OnChanges {
  @Input('data') data;
  item: any;
  constructor(private router: Router) { }


  ngOnChanges(changes: SimpleChanges): void {
    if(this.data)
      this.item = this.data
  }

  ngOnInit() {
    console.log(this.data)
  }

  navigateTo() {
    this.router.navigate(['blog', this.item.slug])
  }
}
