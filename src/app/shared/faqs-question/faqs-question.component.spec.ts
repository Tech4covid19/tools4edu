import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsQuestionComponent } from './faqs-question.component';

describe('FaqsQuestionComponent', () => {
  let component: FaqsQuestionComponent;
  let fixture: ComponentFixture<FaqsQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqsQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqsQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
