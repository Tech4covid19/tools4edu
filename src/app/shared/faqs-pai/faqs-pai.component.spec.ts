import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsPaiComponent } from './faqs-pai.component';

describe('FaqsPaiComponent', () => {
  let component: FaqsPaiComponent;
  let fixture: ComponentFixture<FaqsPaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqsPaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqsPaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
