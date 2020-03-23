import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsAlunoComponent } from './faqs-aluno.component';

describe('FaqsAlunoComponent', () => {
  let component: FaqsAlunoComponent;
  let fixture: ComponentFixture<FaqsAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqsAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqsAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
