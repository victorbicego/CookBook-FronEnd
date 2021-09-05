import {Pipe, PipeTransform} from '@angular/core';
import {CuisineInterface} from "../interfaces/cuisine-interface";

@Pipe({
  name: 'filterByContinent'
})

export class FilterByContinentPipe implements PipeTransform {

  transform(cuisineList: CuisineInterface[], continent: string): CuisineInterface[] {
    const newCuisineList: CuisineInterface[] = [];

    cuisineList.forEach(cuisine => {
      if (cuisine.continent === continent) {
        newCuisineList.push(cuisine);
      }
    })

    newCuisineList.sort((cuisine1, cuisine2) => this.sortCuisine(cuisine1, cuisine2))

    return newCuisineList;
  }

  private sortCuisine = function (cuisine1: CuisineInterface, cuisine2: CuisineInterface) {
    if (cuisine1.country < cuisine2.country) {
      return -1;
    }
    if (cuisine1.country > cuisine2.country) {
      return 1;
    }
    return 0;
  }

}
