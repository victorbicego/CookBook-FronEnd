import {IngredientInterface} from "./ingredient-interface";
import {CuisineInterface} from "./cuisine-interface";
import {HashtagInterface} from "./hashtag-interface";

export interface RecipeInterface {
  id?:number,
  name: string;
  author: string;
  instruction: string;
  ingredientList: IngredientInterface[];
  difficultyGrade: string;
  category: string;
  cuisine: CuisineInterface;
  preparationTime: number;
  portion: number;
  hashTagList?: HashtagInterface[];
  dateOfPost:Date;
  rating:number;
}

