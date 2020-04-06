import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit, OnChanges {
  @Input( 'data' ) data
  constructor(private router: Router) { }


  ngOnChanges(changes: SimpleChanges): void {
 
      
  }

  ngOnInit() {
    console.log(this.data)
  }
  navigateTo() {
    this.router.navigate([this.data.stakeholder.title.toLowerCase(), this.data.id])
  }
}
