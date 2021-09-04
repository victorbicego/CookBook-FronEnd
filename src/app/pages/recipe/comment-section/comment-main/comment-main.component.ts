import {Component, Input, OnInit} from '@angular/core';
import {RecipeInterface} from "../../../../interfaces/recipe-interface";
import {CommentInterface} from "../../../../interfaces/comment-interface";
import {CommentService} from "../../../../services/comment/comment.service";
import {RecipeService} from "../../../../services/recipe/recipe.service";

@Component({
  selector: 'app-comment-main',
  templateUrl: './comment-main.component.html',
  styleUrls: ['./comment-main.component.css']
})
export class CommentMainComponent implements OnInit {

  recipe!: RecipeInterface;
  commentList!: CommentInterface[];

  @Input() dark!:boolean;

  constructor(private commentsService:CommentService, private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.recipeService.returnSingleRecipe().subscribe(recipe=> {
      this.recipe = recipe;
      this.commentsService.getAllCommentsByRecipe(this.recipe.id!);
      this.commentsService.returnCommentList().subscribe(comments => {this.commentList = comments;});
    });
  }

}
