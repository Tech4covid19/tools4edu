import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfessorComponent,
    AlunoComponent,
    PaiComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
