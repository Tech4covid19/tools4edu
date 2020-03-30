import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { VideoPlayerState } from '../../store/store.state';
import * as StreamActions from '../../store/actions/stream.actions';
import { Stream } from '../../store/models/stream';
import { getSelectedStreamState, getStreamListState, getVideoPlayerState } from '../../store/reducers';
import { map } from 'rxjs/operators';

@Component({
  selector: 'stream-list',
  templateUrl: './stream-list.component.html',
  styleUrls: ['./stream-list.component.scss']
})

export class StreamListComponent {

  streamList$: Observable<any>;
  streams: Stream[];
  streamListSubscription: Subscription;

  constructor(private store: Store<VideoPlayerState>) {
    this.store.dispatch(new StreamActions.FetchStreams());
  }

  ngOnInit() {
    this.streamList$ = this.store.pipe(select(getVideoPlayerState))
    this.streamList$.subscribe( e => this.streams = e.streamList)
  }

  setSelectedStream(stream: Stream) {
    this.store.dispatch(new StreamActions.SetSelectedStream(stream));
  }

}
