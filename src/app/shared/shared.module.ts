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


@NgModule({
  declarations: [NavbarComponent, CarouselComponent, CardComponent, CardPartnersComponent, FooterComponent, FaqsQuestionComponent, FaqsProfessorComponent, FaqsAlunoComponent, FaqsPaiComponent],
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule,
    NgxYoutubePlayerModule.forRoot(),
  ],
  exports: [NavbarComponent, CarouselComponent, CardComponent, CardPartnersComponent, FaqsQuestionComponent, FaqsProfessorComponent, FaqsAlunoComponent, FaqsPaiComponent, FooterComponent]
})
export class SharedModule { }
