import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsProfessorComponent } from './faqs-professor.component';

describe('FaqsProfessorComponent', () => {
  let component: FaqsProfessorComponent;
  let fixture: ComponentFixture<FaqsProfessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqsProfessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqsProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
