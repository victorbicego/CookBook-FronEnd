import {Component, Input, OnInit} from '@angular/core';
import {CommentInterface} from "../../../../interfaces/comment-interface";
import {CommentService} from "../../../../services/comment/comment.service";

@Component({
  selector: 'app-comment-single',
  templateUrl: './comment-single.component.html',
  styleUrls: ['./comment-single.component.css']
})
export class CommentSingleComponent implements OnInit {

  @Input() singleComment!: CommentInterface;
  @Input() dark!: boolean;

  selected: string[] = ["not-selected", "not-selected", "not-selected", "not-selected", "not-selected"];

  constructor(private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.setRating();
  }

  deleteComment(): void {
    this.commentService.deleteComment(this.singleComment.id!, this.singleComment.recipe.id!);
  }

  setRating(): void {
    for (let i = 0; i < this.singleComment.rating; i++) {
      this.selected[i] = "selected";
    }
  }

}
