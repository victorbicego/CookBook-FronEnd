import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CommentService} from "../../../../services/comment/comment.service";
import {RecipeInterface} from "../../../../interfaces/recipe-interface";
import {CommentInterface} from "../../../../interfaces/comment-interface";
import {RecipeService} from "../../../../services/recipe/recipe.service";

@Component({
  selector: 'app-home-top-rated',
  templateUrl: './home-top-rated.component.html',
  styleUrls: ['./home-top-rated.component.css']
})
export class HomeTopRatedComponent implements OnInit {

  selectedIndex: number;

  recipes: RecipeInterface[] = [];
  topComment?: CommentInterface;

  constructor(private recipeService: RecipeService, private commentService: CommentService, private router: Router) {
    this.selectedIndex = 0;
  }

  ngOnInit(): void {
    this.recipeService.getTop3Recipes();
    this.recipeService.returnTop3ratedRecipesList()
      .subscribe(recipeList => this.recipes = recipeList);
  }

  goToSinglePageRecipe(id: number): void {
    this.router.navigate(['recipe/' + id]);
  }

  lastRecipe(selectedIndex: number): void {
    this.selectedIndex = selectedIndex - 1;
  }

  nextRecipe(selectedIndex: number): void {
    this.selectedIndex = selectedIndex + 1;
  }

  getNewComment(): void {
    this.commentService.getTopCommentByRecipe(this.recipes[this.selectedIndex].id!);
    this.commentService.returnTopComment().subscribe(comment => this.topComment = comment);
  }

}
