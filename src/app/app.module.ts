import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./screens/home/home.component";

import { SharedModule } from './shared/shared.module';
import { ProfessorComponent } from './screens/professor/professor.component';
import { AlunoComponent } from './screens/aluno/aluno.component';
import { PaiComponent } from './screens/pai/pai.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './screens/about/about.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { FAQsComponent } from './screens/faqs/faqs.component';
import { PrivacyComponent } from './screens/privacy/privacy.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { VideoPlayerModule } from './shared/video-player/video-player.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { HttpClientModule } from '@angular/common/http';
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
    PrivacyComponent
  ],
  imports: [
    BrowserModule,
    HttpLinkModule,
    HttpClientModule,
    ApolloModule,
    AppRoutingModule,
    FlexLayoutModule,
    VideoPlayerModule,
    StoreModule.forRoot( {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    SharedModule,
    BrowserAnimationsModule,
    NgxYoutubePlayerModule.forRoot(),
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
