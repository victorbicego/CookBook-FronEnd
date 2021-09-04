import {RecipeInterface} from "./recipe-interface";

export interface IngredientInterface {
  id?: number;
  amount: number;
  unit: string;
  name: string;
  recipe?: RecipeInterface;
}
