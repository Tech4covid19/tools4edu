import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import browser from 'detect-browser';
import { MediaObserver } from '@angular/flex-layout';
import { Observable, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
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
  width = 1054
  height = 596
  @ViewChild('mediaPlayerElement') mediaPlayerElement: ElementRef;

  private player;
  mediaPlayer: any;

  constructor(public mediaObserver: MediaObserver ) { 
    mediaObserver.media$.subscribe(el => console.log(el.property));
    fromEvent(window, 'resize').pipe(
    debounceTime(1500) )
    .subscribe((event:any) => {
      this.width = event.target.innerWidth;
      this.height = event.target.innerHeight
    });
  }

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
            this.mediaPlayer.height = '100%';
            this.mediaPlayer.width = '100%';
            this.mediaPlayer.enableAutosize = true
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
