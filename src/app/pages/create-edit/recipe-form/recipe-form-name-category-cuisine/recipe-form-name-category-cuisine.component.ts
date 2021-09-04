import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Category} from "../../../../enums/category";
import {RecipeInterface} from "../../../../interfaces/recipe-interface";
import {CuisineService} from "../../../../services/cuisine/cuisine.service";
import {ClearService} from "../../../../services/clear/clear.service";
import {CuisineInterface} from "../../../../interfaces/cuisine-interface";

class Cuisine {
}

@Component({
  selector: 'app-recipe-form-name-category-cuisine',
  templateUrl: './recipe-form-name-category-cuisine.component.html',
  styleUrls: ['./recipe-form-name-category-cuisine.component.css']
})
export class RecipeFormNameCategoryCuisineComponent implements OnInit, OnChanges {

  categories: Category[] = [];
  cuisineList: CuisineInterface[] = [];
  continentList: string[];
  clear?: boolean;

  name?: string;
  category?: string;
  cuisineChild?: Cuisine;

  @Input() editRecipe?: RecipeInterface;
  @Output() sendInfo = new EventEmitter<any>();

  constructor(private cuisineService: CuisineService, private clearService: ClearService) {
    Object.values(Category).forEach(category => this.categories.push(category));
    this.cuisineService.getAllCuisines();
    this.cuisineService.returnCuisineList().subscribe(cuisineList => (this.cuisineList = cuisineList));
    this.continentList = this.cuisineService.getContinentList();
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.editRecipe !== undefined) {
      this.name = this.editRecipe.name;
      this.category = this.editRecipe.category;
      this.cuisineChild = this.editRecipe.cuisine;
    }

    this.clearService.getClear().subscribe(clear => {
      this.clear = clear;
      if (clear) {
        this.name = undefined;
        this.category = undefined;
        this.cuisineChild = undefined;
      }
    });
  }

  onChange(): void {
    this.sendInfo.emit({name: this.name, category: this.category, cuisineChild: this.cuisineChild});
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

}
