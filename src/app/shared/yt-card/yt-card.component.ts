import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-yt-card',
  templateUrl: './yt-card.component.html',
  styleUrls: ['./yt-card.component.scss']
})
export class YtCardComponent implements OnInit {


  @Input() videoIdOut: string;
  @Input() domId: string;
  @Input() parameters: string | YT.PlayerVars;
  playing: boolean = false;


  public get currentTime(): number {
    return this.player.getCurrentTime();
  }

  player: YT.Player;

  constructor() {}

  ngOnInit() {
  }
 
  savePlayer(player) {
    this.player = player;

  }
  onStateChange(event) {
  
  }
   play() {
     this.playing = !this.playing
     if(this.playing)
      this.player.playVideo()
     if(!this.playing)
      this.player.pauseVideo()
   }


 
}
