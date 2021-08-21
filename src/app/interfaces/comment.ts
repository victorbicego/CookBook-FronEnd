import {Recipe} from "./recipe";

export interface Comment {
  id?: number;
  text: string;
  author: string;
  rating: number;
  recipe: Recipe;
  dateOfPost?: Date;
}
