import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  url = '';

  constructor(private router: Router) {
    router.events.subscribe((route) => {
      if(route instanceof NavigationEnd) {
        if (route.url && route.url.length > 0) {
          this.url = route.url.slice(1);
          console.log(this.url)
        }
      }
    });
  }

  ngOnInit() {
  }

}
