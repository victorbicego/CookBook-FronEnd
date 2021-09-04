import {Component, Input, OnInit} from '@angular/core';
import {RecipeInterface} from "../../../../interfaces/recipe-interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CommentService} from "../../../../services/comment/comment.service";
import {RecipeService} from "../../../../services/recipe/recipe.service";

@Component({
  selector: 'app-comment-new',
  templateUrl: './comment-new.component.html',
  styleUrls: ['./comment-new.component.css']
})
export class CommentNewComponent implements OnInit {

  recipe!: RecipeInterface;

  commentForm: FormGroup;

  @Input() dark!:boolean;

  selected: string[] = ["not-selected", "not-selected", "not-selected", "not-selected", "not-selected"];

  constructor(private fb: FormBuilder, private commentService: CommentService, private recipeService: RecipeService) {
    this.commentForm = this.fb.group({
      id: [],
      text: ["", [Validators.maxLength(450), Validators.required]],
      author: ["", [Validators.maxLength(30), Validators.required]],
      rating: ["", Validators.required],
      recipe: [],
      dateOfPost: []
    });

  }

  ngOnInit(): void {
    this.recipeService.returnSingleRecipe().subscribe(recipe => this.recipe = recipe);
  }

  saveComment() {
    this.commentForm.get('dateOfPost')?.setValue(new Date().toLocaleDateString());
    this.commentForm.get('recipe')?.setValue(this.recipe);
    this.commentService.addComment({...this.commentForm.value});
    this.selected = ["not-selected", "not-selected", "not-selected", "not-selected", "not-selected"];
    this.commentForm.reset();
  }

  selectRating(rating: number) {
    this.commentForm.get('rating')?.setValue(rating);
    this.selected = ["not-selected", "not-selected", "not-selected", "not-selected", "not-selected"];
    for (let i = 0; i < rating; i++) {
      this.selected[i] = "selected";
    }
  }

}
