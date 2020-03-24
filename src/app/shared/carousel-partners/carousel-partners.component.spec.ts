import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPartnersComponent } from './carousel-partners.component';

describe('CarouselPartnersComponent', () => {
  let component: CarouselPartnersComponent;
  let fixture: ComponentFixture<CarouselPartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselPartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
