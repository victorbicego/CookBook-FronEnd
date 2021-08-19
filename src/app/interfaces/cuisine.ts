export interface CuisineBase {
  continent: string;
  country: string;
}

export interface Cuisine extends CuisineBase {
  id: number;
}
