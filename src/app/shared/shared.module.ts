import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponent } from './carousel/carousel.component';
import { CardComponent } from './card/card.component';
import { CardPartnersComponent } from './card-partners/card-partners.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [NavbarComponent, CarouselComponent, CardComponent, CardPartnersComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule
  ],
  exports: [NavbarComponent, CarouselComponent, CardComponent, CardPartnersComponent, FooterComponent]
})
export class SharedModule { }
