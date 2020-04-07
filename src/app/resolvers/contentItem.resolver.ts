
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { ContentItemQuery } from '../store/content-item.query';
import { Injectable } from '@angular/core';
import { ContentItemService } from '../store/content-item.service';
import { take } from 'rxjs/operators';

 
@Injectable({ providedIn: 'root' })
export class ContentItemResolver implements Resolve<any> {

 
  constructor(private query: ContentItemQuery, private service: ContentItemService) { }
 
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any> {
    const entity = this.query.getEntity(e => e.slug === route.params.slug)
    if(!entity){
        return this.service.getContentItem(route.params.slug).pipe(take(1))
    } else {
        return this.query.selectEntity(e => e.slug === route.params.slug).pipe(take(1))
    }
  }
 
}