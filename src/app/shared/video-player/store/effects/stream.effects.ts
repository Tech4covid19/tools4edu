import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Stream } from '../models/stream';
import * as StreamActions from '../actions/stream.actions';

const streams: Stream[] = [ // just pretending that we are loading data from an API in this effect.
    {
      title: 'Sintel',
      src: 'https://d3ijatdo5d89ru.cloudfront.net/out/v1/40b710c6d0324034837c72b018bde9ce/f5470f1729594857ad487383445925b9/ab0e16fc3d1147d6aab9aa9590503e76/index.m3u8'
    },
    {
      title: 'Big Buck Bunny',
      src: 'https://d3ijatdo5d89ru.cloudfront.net/out/v1/a1202d332b6c44a98235c89cff7e7638/f5470f1729594857ad487383445925b9/ab0e16fc3d1147d6aab9aa9590503e76/index.m3u8'
    }
  ];


@Injectable()
export class StreamEffects {
  @Effect()
  fetch$: Observable<Action> = this.actions$.pipe(
    ofType(StreamActions.FETCH_STREAMS),
    map(action => ({ type: StreamActions.SET_STREAMS, payload: streams }))
  );

  constructor(private actions$: Actions) {}
}
