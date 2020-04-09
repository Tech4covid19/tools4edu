import { Component } from '@angular/core';
import {MediaObserver} from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tools4edu';
  constructor(public mediaObserver: MediaObserver ) { 
    mediaObserver.media$.subscribe(el => console.log(el));
  }

}
