import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";
import {RecipeService} from "../services/recipe.service";
import {Observable} from "rxjs";
import {Cuisine, CuisineList} from "../interfaces/cuisine";
import {CuisineService} from "../services/cuisine.service";
import {Hashtag} from "../interfaces/hashtag";
import {HashtagService} from "../services/hashtag.service";
import {Recipe} from "../interfaces/recipe";
import {Ingredient} from "../interfaces/ingredient";
import {MatChip, MatChipList} from "@angular/material/chips";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit, OnChanges {

  unities: string[] = ["milliliter", "liter", "gram", "kilo", "unit"];
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
    hashTagList: new FormControl([])
  });

  ingredients: FormArray = this.recipeCreateFormGroup.get('ingredientList') as FormArray;

  public cuisines$!: Observable<CuisineList[]>;
  public hashtags$!: Observable<Hashtag[]>;

  @Input() editRecipe?: Recipe | undefined;
  @Input() id?:number |undefined;
  @ViewChild(MatChipList)
  chipList!: MatChipList;

  constructor(public dialog: MatDialog, private recipeService: RecipeService, private cuisineService: CuisineService, private hashtagService: HashtagService, private fb: FormBuilder) {
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.editRecipe.currentValue && this.editRecipe !== undefined) {

      this.recipeCreateFormGroup.patchValue(this.editRecipe);

      this.recipeCreateFormGroup.setControl('ingredientList', this.setExistingIngredients(this.editRecipe.ingredientList))
      this.ingredients = this.recipeCreateFormGroup.get('ingredientList') as FormArray;

      const chipsToSelect = this.chipList.chips.filter((chip)=> this.editRecipe!.hashTagList!.includes(chip.value));
      console.log(this.chipList);
      this.chipList.chips.forEach((c)=> console.log(c));
      console.log(this.editRecipe!.hashTagList!.includes(this.editRecipe!.hashTagList![0]))
      chipsToSelect.forEach((chip) => chip.select());
      console.log(chipsToSelect);
      console.log(this.recipeCreateFormGroup);
    }

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

  setExistingIngredients(ingredientList: Ingredient[]): FormArray {
    const formArray = new FormArray([]);
    ingredientList.forEach(ingredient => {
      formArray.push(this.fb.group({
        unit: ingredient.unit,
        amount: ingredient.amount,
        name: ingredient.name,
      }));
    });

    return formArray;
  }

  toggleSelection(chip: MatChip) {
    chip.toggleSelected();
  }
}
