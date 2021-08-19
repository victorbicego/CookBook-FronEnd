import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  unities: string[] = ["milliliter", "liter", "gram", "kilogram", "pinch", "unity"];
  difficulties: string[] = ["Easy", "Intermediate", "Hard"];
  categories: string[] = ["Starter", "Main", "Dessert"];
  cuisines: { continent: string, countries: string[] }[] = [
    {continent: "Africa", countries: ["Egypt", "South Africa"]},
    {continent: "Asia", countries: ["China", "Japan", "Thailand"]},
    {continent: "Europe", countries: ["France", "German", "Greece", "Italy", "Portugal", "Poland", "Spain", "Russia"]},
    {continent: "North America", countries: ["Canada", "Mexico", "USA"]},
    {continent: "South America", countries: ["Argentina", "Brazil", "Chile", "Peru"]},
  ];
  hashtags: string[] = ["vegan", "party", "kids", "summer"];

  showConfirm: boolean = false;

  recipeCreateFormGroup = new FormGroup({
    name: new FormControl("", Validators.maxLength(30)),
    instructions: new FormControl("", Validators.maxLength(350)),
    ingredients: new FormArray([
      new FormGroup({
        unity: new FormControl("", Validators.required),
        quantity: new FormControl("", Validators.required),
        ingredientName: new FormControl("", [Validators.maxLength(50), Validators.required])
      })], Validators.minLength(1)),
    difficulty: new FormControl("", Validators.required),
    category: new FormControl("", Validators.required),
    cuisine: new FormControl("", Validators.required),
    author: new FormControl("", Validators.maxLength(30)),
    preparationTime: new FormControl("", Validators.min(1)),
    portion: new FormControl("", Validators.min(1)),
    hashtags: new FormControl([''])
  })

  ingredients = this.recipeCreateFormGroup.get('ingredients') as FormArray;

  constructor() {
  }

  ngOnInit(): void {
  }

  popupConfirmation(): void {
    this.showConfirm = true;
  }

  confirmInput(): void {
    console.log(this.recipeCreateFormGroup.value);
    this.showConfirm = !this.showConfirm;
  }

  denyInput(): void {
    this.showConfirm = !this.showConfirm;
  }

  newIngredient(): FormGroup {
    return new FormGroup({
      unity: new FormControl(""),
      quantity: new FormControl(""),
      ingredientName: new FormControl("")
    })
  }

  addIngredient() {
    this.ingredients.push(this.newIngredient());
    console.log(this.recipeCreateFormGroup.get("quantities")?.value);
  }

  removeIngredient(i: number) {
    this.ingredients.removeAt(i);
    console.log(this.recipeCreateFormGroup.get("quantities")?.value);
  }

}
