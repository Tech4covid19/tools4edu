import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs-question',
  templateUrl: './faqs-question.component.html',
  styleUrls: ['./faqs-question.component.scss']
})
export class FaqsQuestionComponent implements OnInit {
  
  @Input()
  number: Number;
  @Input()
  question: String;
  @Input()
  answer: String;

  open = false;

  constructor() { }

  ngOnInit() { }

  toggle() {
    this.open = !this.open;
  }
}
