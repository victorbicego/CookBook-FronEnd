import {Recipe} from "./recipe";

export interface IngredientBase {
  amount: number;
  unit: string;
  ingredient: string;
}

export interface Ingredient extends IngredientBase {
  id: number;
  recipe: Recipe;
}
