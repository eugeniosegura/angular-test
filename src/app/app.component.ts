import { Component, OnInit } from '@angular/core';
import { CommentObj } from './commentObj';
import { AppService } from './app.service';

@Component({
  selector: 'abe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ AppService ]
})

export class AppComponent implements OnInit {

  title = 'abe';
  comments = [];
  commentObj: CommentObj;

  quality = 0;
  expertise = 0;
  culture = 0;


  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.getComments();
  }

  getComments(): void {
    this.appService.getComments().subscribe(comments => this.comments = comments);
  }

  addComment(comment: CommentObj): void {
    this.appService.addComment(comment)
      .subscribe(comment => this.comments.push(comment));
  }

  changeQuality(qNunmber) {
    this.quality = qNunmber;
  }

  changeExpertise(eNumber) {
    this.expertise = eNumber;
  }

  changeCulture(cNumber) {
    this.culture = cNumber;
  }

  commentSurvey(_comment) {
    const newComment: CommentObj = { quality : this.quality,
        expertise : this.expertise,
        culture : this.culture,
        comments : _comment.value} as CommentObj;
    this.addComment(newComment);
  }
}
