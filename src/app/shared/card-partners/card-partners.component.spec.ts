import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPartnersComponent } from './card-partners.component';

describe('CardPartnersComponent', () => {
  let component: CardPartnersComponent;
  let fixture: ComponentFixture<CardPartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
