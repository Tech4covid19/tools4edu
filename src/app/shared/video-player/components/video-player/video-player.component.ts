import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Stream } from '../../store/models/stream';
import { VideoPlayerState } from '../../store/store.state';
import { getSelectedStreamState, getVideoPlayerState } from '../../store/reducers';

@Component({
  selector: 'video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent {

  state$: Observable<any>;
  stream: Stream;

  constructor(private store: Store<VideoPlayerState>) {}

  ngOnInit() {
    this.state$ = this.store.pipe(select(getVideoPlayerState));
    this.state$.subscribe(
      (val:any) => {
        this.stream = val.selectedStream;
      }
    )
  }
}
