import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {

  }
  goTo(stakeholder) {
    this.router.navigate(['conteudo'], { queryParams: { filter: stakeholder } })
  }
}
