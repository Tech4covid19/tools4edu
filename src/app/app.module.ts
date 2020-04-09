import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';

import { SharedModule } from './shared/shared.module';
import { ProfessorComponent } from './screens/professor/professor.component';
import { AlunoComponent } from './screens/aluno/aluno.component';
import { PaiComponent } from './screens/pai/pai.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './screens/about/about.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { FAQsComponent } from './screens/faqs/faqs.component';
import { PrivacyComponent } from './screens/privacy/privacy.component';

import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { HttpClientModule } from '@angular/common/http';
import { ContentComponent } from './screens/content/content.component';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';
import { ContentItemResolver } from './resolvers/contentItem.resolver';
import { BlogComponent } from './screens/blog/blog.component';
import { BlogArticleResolver } from './resolvers/blog-article.resolver';
import { BlogArticleComponent } from './screens/blog-article/blog-article.component';

import localeDeAt from '@angular/common/locales/pt-PT';
import { registerLocaleData } from '@angular/common';
import { ContentArticleComponent } from './screens/content-article/content-article.component';
import { BlockUIModule } from 'ng-block-ui';

registerLocaleData(localeDeAt);
const uri = 'https://cnom3x70jk.execute-api.eu-central-1.amazonaws.com/dev/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink) {
  return {
    link: httpLink.create({uri}),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfessorComponent,
    AlunoComponent,
    PaiComponent,
    FAQsComponent,
    AboutComponent,
    PrivacyComponent,
    ContentComponent,
    BlogComponent,
    BlogArticleComponent,
    ContentArticleComponent,
  ],
  imports: [
    BrowserModule,
    HttpLinkModule,
    HttpClientModule,
    ApolloModule,
    AppRoutingModule,
    FlexLayoutModule,

    BlockUIModule.forRoot({
      delayStart: 500,
      delayStop: 500
    }),
    SharedModule,
    BrowserAnimationsModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule.forRoot(),

  ],
  providers: [
    ContentItemResolver,
    BlogArticleResolver,
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
    { provide: LOCALE_ID, useValue: "pt-PT" },
    { provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: 'https://cnom3x70jk.execute-api.eu-central-1.amazonaws.com/dev/graphql' }},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
