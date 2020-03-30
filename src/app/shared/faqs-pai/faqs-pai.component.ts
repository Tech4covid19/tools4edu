import { Component, OnInit } from "@angular/core";
import { AppService } from "../../app.service";

@Component({
  selector: "app-faqs-pai",
  templateUrl: "./faqs-pai.component.html",
  styleUrls: ["./faqs-pai.component.scss"]
})
export class FaqsPaiComponent implements OnInit {
  // first group of questions

  showMore = false;
  whatsShowing = 3;
  appConfig: any;
  allQuestions: any;
  shownQuestions: any;

  constructor(appService: AppService) {
    this.appConfig = appService.getAppConfig();
    this.allQuestions = this.appConfig.parentsFaqs;
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
