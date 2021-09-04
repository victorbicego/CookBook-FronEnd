import {Component, Input, OnChanges, OnInit, Output, EventEmitter, SimpleChanges} from '@angular/core';
import {Unit} from "../../../../enums/unit";
import {IngredientInterface} from "../../../../interfaces/ingredient-interface";
import {RecipeInterface} from "../../../../interfaces/recipe-interface";
import {ClearService} from "../../../../services/clear/clear.service";

@Component({
  selector: 'app-recipe-form-ingredient',
  templateUrl: './recipe-form-ingredient.component.html',
  styleUrls: ['./recipe-form-ingredient.component.css']
})
export class RecipeFormIngredientComponent implements OnInit, OnChanges {

  unities: Unit[] = [];
  ingredientList: IngredientInterface[] = [];
  clear?: boolean;

  @Input() editRecipe?: RecipeInterface;
  @Output() sendInfo = new EventEmitter<any>();

  constructor(private clearService: ClearService) {
    Object.values(Unit).forEach(unit => this.unities.push(unit));
    this.addIngredient();
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.editRecipe !== undefined) {
      this.ingredientList = this.editRecipe.ingredientList;
    }

    this.clearService.getClear().subscribe(clear => {
      this.clear = clear;
      if (clear) {
        this.ingredientList = [];
        this.addIngredient();
      }
    });
  }

  addIngredient(): void {
    this.ingredientList.push(this.newIngredient());
  }

  newIngredient(): IngredientInterface {
    return {
      name: '',
      unit: '',
      amount: 0
    }
  }

  removeIngredient(i: number): void {
    this.ingredientList = this.ingredientList.filter(ingredient => this.ingredientList[i] !== ingredient);
    this.sendInfo.emit(this.ingredientList);
  }

  onChange(): void {
    this.sendInfo.emit(this.ingredientList);
  }

  isValidIngredient(ingredient: IngredientInterface): boolean {
    return ingredient.unit.length > 0 && ingredient.name.length > 0 && ingredient.unit.length > 0;
  }

}
