import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-faqs-aluno',
  templateUrl: './faqs-aluno.component.html',
  styleUrls: ['./faqs-aluno.component.scss']
})
export class FaqsAlunoComponent implements OnInit {
  // first group of questions
  showMore = false;
  whatsShowing = 3;
  appConfig: any;
  allQuestions: any;
  shownQuestions: any;

  constructor(appService: AppService) {
    this.appConfig = appService.getAppConfig();
    this.allQuestions = this.appConfig.studentsFaqs;
  }

  ngOnInit() {
    this.shownQuestions = this.allQuestions.slice(0, 3);
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
