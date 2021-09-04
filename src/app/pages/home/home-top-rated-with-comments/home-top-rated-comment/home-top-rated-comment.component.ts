import {Component, Input, OnInit} from '@angular/core';
import {CommentInterface} from "../../../../interfaces/comment-interface";

@Component({
  selector: 'app-home-top-rated-comment',
  templateUrl: './home-top-rated-comment.component.html',
  styleUrls: ['./home-top-rated-comment.component.css']
})
export class HomeTopRatedCommentComponent implements OnInit {

  @Input() topComment?: CommentInterface;

  constructor() {
  }

  ngOnInit(): void {
  }

}
