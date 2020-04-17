import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { CarouselComponent } from './carousel/carousel.component';
import { CardComponent } from './card/card.component';
import { CardPartnersComponent } from './card-partners/card-partners.component';
import { FooterComponent } from './footer/footer.component';
import { FaqsQuestionComponent } from './faqs-question/faqs-question.component';
import { FaqsProfessorComponent } from './faqs-professor/faqs-professor.component';
import { FaqsAlunoComponent } from './faqs-aluno/faqs-aluno.component';
import { FaqsPaiComponent } from './faqs-pai/faqs-pai.component';
import { YtCardComponent } from './yt-card/yt-card.component';
import { CarouselPartnersComponent } from './carousel-partners/carousel-partners.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ContentCardComponent } from './content-card/content-card.component';
import { SelectCardComponent } from './select-card/select-card.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { GoogleAnalyticsService } from './google-analytics/ga.service';


@NgModule({
  declarations: [
    NavbarComponent,
    CarouselComponent,
    CardComponent,
    CardPartnersComponent,
    FooterComponent,
    FaqsQuestionComponent,
    FaqsProfessorComponent,
    FaqsAlunoComponent,
    FaqsPaiComponent,
    YtCardComponent,
    CarouselPartnersComponent,
    ContentCardComponent,
    SelectCardComponent,
    BlogCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule,
    FlexLayoutModule,
    NgxYoutubePlayerModule.forRoot(),
  ],
  exports: [
    NavbarComponent,
    CarouselComponent,
    CardComponent,
    CardPartnersComponent,
    FaqsQuestionComponent,
    FaqsProfessorComponent,
    FaqsAlunoComponent,
    FaqsPaiComponent,
    FooterComponent,
    YtCardComponent,
    CarouselPartnersComponent,
    ContentCardComponent,
    SelectCardComponent,
    BlogCardComponent
  ]
})
export class SharedModule { }
