import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  url = '';
  drawer = false;

  constructor(private router: Router,
    private renderer: Renderer2) {
    router.events.subscribe((route) => {
      if(route instanceof NavigationEnd) {
        if (route.url && route.url.length > 0) {
          this.url = route.url.slice(1);
        }
      }
    });
  }

  ngOnInit() {
  }

  public toggleDrawer() {
    this.drawer = !this.drawer;

    if (this.drawer) {
      this.renderer.addClass(document.body, 'scroll-lock')
    }
  }
}
