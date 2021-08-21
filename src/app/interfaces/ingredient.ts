import {Recipe} from "./recipe";

export interface Ingredient {
  id?: number;
  amount: number;
  unit: string;
  name: string;
  recipe?: Recipe;
}
