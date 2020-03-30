import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import browser from 'detect-browser';
declare const MediaElementPlayer: any;
@Component({
  selector: 'app-yt-card',
  templateUrl: './yt-card.component.html',
  styleUrls: ['./yt-card.component.scss']
})
export class YtCardComponent implements OnInit, AfterViewInit {


  @Input() videoIdOut: any;
  @Input() domId: string;
  @Input() parameters: string | YT.PlayerVars;
  playing: boolean = false;
  time: any;
  videoDescription: any;
  videoTitle:any;
  song: string;

  @ViewChild('mediaPlayerElement') mediaPlayerElement: ElementRef;

  private player;
  mediaPlayer: any;

  constructor() {}

  ngOnInit() {

    

        // HLS
        this.song = 'https://d3ijatdo5d89ru.cloudfront.net/out/v1/40b710c6d0324034837c72b018bde9ce/f5470f1729594857ad487383445925b9/ab0e16fc3d1147d6aab9aa9590503e76/index.m3u8';
       

        console.log('Edge and Safari - Player');
      

     
  
    
  }
 
  ngAfterViewInit() {
    this.loadMediaPlayer()
   
   
   
   
  }
  loadMediaPlayer() {
    this.mediaPlayer = new  
            MediaElementPlayer(this.mediaPlayerElement.nativeElement);
            this.mediaPlayer.setSrc(this.videoIdOut.videoUrl);
            this.mediaPlayer.height = 594
            this.mediaPlayer.width = 1056
            this.mediaPlayer.enableAutosize = false
            this.mediaPlayer.load();
            const video = this.mediaPlayerElement.nativeElement
            setTimeout( () => {
              
            },300)
            video.addEventListener('loadedmetadata', (event) => {
              console.log(event);
            });
            video.onloadedmetadata = (event) => { 
              console.log(video.duration)
              this.time = parseFloat((video.duration / 60).toFixed(2));
              //this.time = parseFloat((video.duration / 60).toFixed(2));
            
            }       
  }
 
}
