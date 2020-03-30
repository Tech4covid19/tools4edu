import { Directive, ElementRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import Hls from 'hls.js';
import { Player, PlayerStatus } from '../store/models/player';
import * as PlayerActions from '../store/actions/player.actions';
import { Stream } from '../store/models/stream';
import { VideoPlayerState } from '../store/store.state';
import { getSelectedStreamState, getPlayerState } from '../store/reducers';

@Directive({
  selector: '[appVideoPlayer]'
})
export class VideoPlayerDirective {

  private element: HTMLVideoElement;
  hls: any;
  stream$: any;
  player$: any;

  constructor(private store: Store<VideoPlayerState>, el: ElementRef) {
    this.element = el.nativeElement;

  }

  ngOnInit() {
    this.stream$ = this.store.pipe(select(getSelectedStreamState));
    this.player$ = this.store.pipe(select(getPlayerState));
    this.stream$.subscribe(
      (data: any) => {
        this.establishHlsStream(data)
      },
      err => console.error(err),
      () => console.log('stream set and fetched')
    )

    this.player$.subscribe(
      (data: any) => this.setPlayback(data.status)
    )
  }

  setPlayback(status: PlayerStatus) {
    switch(status) {
      case PlayerStatus.PLAYING:
        this.element.play();
        break;
      case PlayerStatus.PAUSED:
        this.element.pause();
    }
  }

  establishHlsStream(stream: Stream): void {
    if (this.hls) {
      this.hls.destroy();
    }
    this.hls = new Hls({
      startLevel: 2,
      capLevelToPlayerSize: true,
    });
    var video = this.element
    if (Hls.isSupported()) {
      var hls = new Hls();
      hls.loadSource(stream.src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function(  event, data) {
        console.log("manifest loaded, found " + data.levels.length + " quality level");
        console.log(video.buffered.end(0)-video.currentTime)
      });
    }
    else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = stream.src;
      
    }
  }

}
