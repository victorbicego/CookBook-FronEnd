import {CuisineBase} from "./cuisine";
import {IngredientBase} from "./ingredient";

export interface RecipeBase {
  name: string;
  instructions: string;
  ingredients: IngredientBase;
  difficulty: string;
  category: string;
  cuisine: CuisineBase;
  author: string;
  preparationTime: number;
  portion: number;
  hashtags: string;
}

export interface Recipe extends RecipeBase {
  id: number;
}
