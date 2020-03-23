import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YtCardComponent } from './yt-card.component';

describe('YtCardComponent', () => {
  let component: YtCardComponent;
  let fixture: ComponentFixture<YtCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YtCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YtCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
