export interface Cuisine {
  id: number;
  continent: string;
  country: string;
}

export interface CuisineList {
  continent: string;
  countries: {
    id: number;
    country: string
  }[];
}
