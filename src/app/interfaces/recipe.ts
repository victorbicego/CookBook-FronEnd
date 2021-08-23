import {Ingredient} from "./ingredient";
import {Cuisine} from "./cuisine";
import {Hashtag} from "./hashtag";

export interface Recipe {
  id?:number,
  name: string;
  author: string;
  instruction: string;
  ingredientList: Ingredient[];
  difficultyGrade: string;
  category: string;
  cuisine: Cuisine;
  preparationTime: number;
  portion: number;
  hashTagList?: Hashtag[];
  dateOfPost?:Date;
}

