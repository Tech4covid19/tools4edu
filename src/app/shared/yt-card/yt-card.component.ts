import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Renderer2,
  OnChanges
} from "@angular/core";
import browser from "detect-browser";
import { MediaObserver } from "@angular/flex-layout";
import { Observable, fromEvent } from "rxjs";
import { debounceTime, auditTime } from "rxjs/operators";
declare const MediaElementPlayer: any;
@Component({
  selector: "app-yt-card",
  templateUrl: "./yt-card.component.html",
  styleUrls: ["./yt-card.component.scss"]
})
export class YtCardComponent implements OnInit, OnChanges {
  @Input() videoIdOut: any;
  @Input() domId: string;
  @Input() parameters: string | YT.PlayerVars;
  playing: boolean = false;
  time: any;
  videoDescription: any;
  videoTitle: any;
  song: string;
  width = 1054;
  height = this.width / 1.77;
  @ViewChild("mediaPlayerElement") mediaPlayerElement: ElementRef;

  private player;
  mediaPlayer: any;

  constructor(public mediaObserver: MediaObserver, private renderer: Renderer2) {
    mediaObserver.media$.subscribe(el => {
      console.log(el.property)
      this.width = Number(el.mediaQuery.split('max-width:')[1].split('px)')[0])
      
      console.log(this.width)
    } );
    
  }

  ngOnInit() {
    // HLS

  
  }
  ngOnChanges() {
    if(this.videoIdOut)
      this.loader()
  }

  loader() {

    this.loadMediaPlayer();
    fromEvent(window, "resize")
    .pipe(auditTime(100))
    .subscribe((event: any) => {
      this.width = event['target'].innerWidth
      this.height = event['target'].innerHeight;
      this.renderer.setAttribute(this.mediaPlayerElement.nativeElement,'width', this.width.toString())
      this.renderer.setAttribute(this.mediaPlayerElement.nativeElement,'height', (this.width / 1.77 ).toString())
      console.log(this.width)
    });
    
  }
  loadMediaPlayer() {
    this.mediaPlayer = new MediaElementPlayer(
      this.mediaPlayerElement.nativeElement, {
  
            autoSize: true,
            features: ['playpause', 'current', 'progress', 'duration', 'volume', 'fullscreen', 'airplay']
        }
    );
    this.mediaPlayer.setSrc(this.videoIdOut.videoUrl);
    this.mediaPlayer.load();
    const video = this.mediaPlayerElement.nativeElement;
    setTimeout(() => {}, 300);
    video.addEventListener("loadedmetadata", event => {
      console.log(event);
    });
    
    video.onloadedmetadata = event => {
      console.log(video.duration);
      this.time = parseFloat((video.duration / 60).toFixed(2));
      //this.time = parseFloat((video.duration / 60).toFixed(2));
    };
  }
}
