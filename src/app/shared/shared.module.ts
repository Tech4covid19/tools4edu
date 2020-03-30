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
import { VideoPlayerModule } from './video-player/video-player.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [NavbarComponent, CarouselComponent, CardComponent, CardPartnersComponent, FooterComponent, FaqsQuestionComponent, FaqsProfessorComponent, FaqsAlunoComponent, FaqsPaiComponent, YtCardComponent, CarouselPartnersComponent],
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule,
    FlexLayoutModule,
    VideoPlayerModule,
    NgxYoutubePlayerModule.forRoot(),
  ],
  exports: [NavbarComponent,VideoPlayerModule, CarouselComponent, CardComponent, CardPartnersComponent, FaqsQuestionComponent, FaqsProfessorComponent, FaqsAlunoComponent, FaqsPaiComponent, FooterComponent, YtCardComponent, CarouselPartnersComponent]
})
export class SharedModule { }
