import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { BlogArticleQuery } from '../store/blog-article/blog-article.query';
import { BlogArticleService } from '../store/blog-article/blog-article.service';


@Injectable({ providedIn: 'root' })
export class BlogArticleResolver implements Resolve<any> {
  constructor(private query: BlogArticleQuery, private service: BlogArticleService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any> {
    const entity = this.query.getEntity(e => e.slug === route.params.slug);
    if (!entity) {
      return this.service.getBlogArticle(route.params.slug).pipe(take(1))
    } else {
      return this.query.selectEntity(e => e.slug === route.params.slug).pipe(take(1))
    }
  }

}
