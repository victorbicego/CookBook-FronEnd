import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";
import {RecipeService} from "../services/recipe.service";
import {Observable} from "rxjs";
import {CuisineList} from "../interfaces/cuisine";
import {CuisineService} from "../services/cuisine.service";
import {Hashtag} from "../interfaces/hashtag";
import {HashtagService} from "../services/hashtag.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

  unities: string[] = ["milliliter", "liter", "gram", "kilogram", "unit"];
  difficulties: string[] = ["Easy", "Intermediate", "Hard"];
  categories: string[] = ["Starter", "Main", "Dessert"];

  recipeCreateFormGroup = new FormGroup({
    name: new FormControl("", [Validators.maxLength(50), Validators.required]),
    author: new FormControl("", [Validators.maxLength(30), Validators.required]),
    instruction: new FormControl("", [Validators.maxLength(600), Validators.required]),
    ingredientList: new FormArray([
      new FormGroup({
        unit: new FormControl("", Validators.required),
        amount: new FormControl("", [Validators.min(1), Validators.required]),
        name: new FormControl("", [Validators.maxLength(50), Validators.required])
      })], [Validators.minLength(1), Validators.required]),
    difficultyGrade: new FormControl("", Validators.required),
    category: new FormControl("", Validators.required),
    cuisine: new FormControl("", Validators.required),
    preparationTime: new FormControl("", [Validators.min(1), Validators.required]),
    portion: new FormControl("", [Validators.min(1), Validators.required]),
    hashtagList: new FormControl([''])
  });

  ingredients: FormArray = this.recipeCreateFormGroup.get('ingredientList') as FormArray;

  public cuisines$!: Observable<CuisineList[]>;
  public hashtags$!: Observable<Hashtag[]>;

  constructor(public dialog: MatDialog, private recipeService: RecipeService, private cuisineService: CuisineService, private hashtagService: HashtagService) {
  }

  ngOnInit(): void {
    this.cuisineService.getAllCuisines();
    this.cuisines$ = this.cuisineService.cuisines$;

    this.hashtagService.getAllHashTags();
    this.hashtags$ = this.hashtagService.hashtags$;
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.componentInstance.saveRecipe.subscribe(() => {
      console.log({...this.recipeCreateFormGroup.value});
      this.recipeService.addRecipe({...this.recipeCreateFormGroup.value})
    })
  }

  newIngredient(): FormGroup {
    return new FormGroup({
      unit: new FormControl("", Validators.required),
      amount: new FormControl("", [Validators.min(1), Validators.required]),
      name: new FormControl("", [Validators.maxLength(50), Validators.required])
    })
  }

  addIngredient() {
    this.ingredients.push(this.newIngredient());
  }

  removeIngredient(i: number) {
    this.ingredients.removeAt(i);
  }

}
