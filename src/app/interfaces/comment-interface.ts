import {RecipeInterface} from "./recipe-interface";

export interface CommentInterface {
  id?: number;
  text: string;
  author: string;
  rating: number;
  recipe: RecipeInterface;
  dateOfPost: Date;
}
