import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RecipeInterface} from "../../../../interfaces/recipe-interface";
import {MatDialog} from "@angular/material/dialog";
import {RecipeService} from "../../../../services/recipe/recipe.service";
import {ClearService} from "../../../../services/clear/clear.service";
import {Router} from "@angular/router";
import {ConfirmDialogComponent} from "../../../global-components/confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'app-recipe-form-main',
  templateUrl: './recipe-form-main.component.html',
  styleUrls: ['./recipe-form-main.component.css']
})
export class RecipeFormMainComponent implements OnInit, OnChanges {

  recipeForm: FormGroup;

  @Input() editRecipe?: RecipeInterface;

  constructor(public dialog: MatDialog, private recipeService: RecipeService, private fb: FormBuilder, private clearService: ClearService, private router: Router) {

    this.recipeForm = this.fb.group({
      id: [this.editRecipe?.id],
      name: ["", [Validators.maxLength(50), Validators.required]],
      author: ["", [Validators.maxLength(30), Validators.required]],
      instruction: ["", [Validators.maxLength(800), Validators.required]],
      ingredientList: [[], Validators.minLength(1)],
      difficultyGrade: ["", Validators.required],
      category: ["", Validators.required],
      cuisine: ["", Validators.required],
      preparationTime: ["", [Validators.min(1), Validators.required]],
      portion: ["", [Validators.min(1), Validators.required]],
      hashTagList: [[], Validators.maxLength(5)],
      dateOfPost: [this.editRecipe?.dateOfPost],
      rating: [0.0]
    });

  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.editRecipe !== undefined) {
      this.recipeForm.patchValue(this.editRecipe);
    }
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.componentInstance.onYes.subscribe(() => {
      if (this.editRecipe === undefined) {
        this.recipeForm.get('dateOfPost')?.setValue(new Date().toLocaleDateString());
        this.recipeService.addRecipe({...this.recipeForm.value});
        this.router.navigate(['']);
      } else {
        this.recipeService.editRecipe({...this.recipeForm.value}, this.editRecipe.id!);
        this.router.navigate(['recipe/' + this.editRecipe!.id]);
      }
    })
  }

  clearForm(): void {
    this.clearService.getClear().next(true);
    this.clearService.getClear().next(false);
  }

  addNameCategoryCuisine(infosFromChild: any): void {
    this.recipeForm.get('name')?.setValue(infosFromChild.name);
    this.recipeForm.get('category')?.setValue(infosFromChild.category);
    this.recipeForm.get('cuisine')?.setValue(infosFromChild.cuisineChild);
  }

  addIngredientList(listFromChild: any): void {
    this.recipeForm.get('ingredientList')?.setValue(listFromChild);
  }

  addInstruction(instructionFromChild: any): void {
    this.recipeForm.get('instruction')?.setValue(instructionFromChild);
  }

  addInfoHashTag(infosFromChild: any): void {
    this.recipeForm.get('preparationTime')?.setValue(infosFromChild.preparationTime);
    this.recipeForm.get('portion')?.setValue(infosFromChild.portion);
    this.recipeForm.get('difficultyGrade')?.setValue(infosFromChild.difficultyGrade);
    this.recipeForm.get('hashTagList')?.setValue(infosFromChild.hashTagList);
  }

  addAuthor(authorFromChild: any): void {
    this.recipeForm.get('author')?.setValue(authorFromChild);
  }

}
