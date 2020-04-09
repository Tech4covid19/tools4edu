import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-faqs-professor',
  templateUrl: './faqs-professor.component.html',
  styleUrls: ['./faqs-professor.component.scss']
})
export class FaqsProfessorComponent implements OnInit, OnChanges {
  @Input() data
  allQuestions = []
  // first group of questions
  shownQuestions = this.allQuestions.slice(0, 3);
  showMore = false;
  whatsShowing = 3;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.data)
      this.allQuestions = this.data
      this.shownQuestions = this.allQuestions.slice(0, 3);
      this.showMore = false;
      this.whatsShowing = 3;
  } 

  ngOnInit() {
  }

  toggleShowMore() {
    if (this.showMore === true) {
      this.shownQuestions = this.allQuestions.slice(0, 3);
      this.whatsShowing = 3;
    } else {
      this.shownQuestions = this.allQuestions;
      this.whatsShowing = this.allQuestions.length;
    }

    this.showMore = !this.showMore;
  }

}
