import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Difficulty} from "../../../enums/difficulty";
import {Category} from "../../../enums/category";
import {ClearService} from "../../../services/clear/clear.service";
import {CuisineService} from "../../../services/cuisine/cuisine.service";
import {RecipeService} from "../../../services/recipe/recipe.service";
import {NavigationService} from "../../../services/navigation/navigation.service";
import {CuisineInterface} from "../../../interfaces/cuisine-interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-result-filter',
  templateUrl: './result-filter.component.html',
  styleUrls: ['./result-filter.component.css']
})
export class ResultFilterComponent implements OnInit, OnChanges {

  difficulties: Difficulty[] = [];
  difficultyGrade?: string;

  categories: Category[] = [];
  category?: string;

  cuisineList: CuisineInterface[] = [];
  continentList: string[];
  cuisineFilter?: CuisineInterface;

  preparationTime?: number;

  rating?: number;

  clear!: boolean;

  @Input() input!: string;
  @Input() page!: number;
  @Input() quantity!: number;

  @Output() sendURL = new EventEmitter<any>();

  constructor(private router: Router, private clearService: ClearService, private cuisineService: CuisineService, private recipeService: RecipeService, private navigationService: NavigationService) {

    Object.values(Category).forEach(category => this.categories.push(category));
    Object.values(Difficulty).forEach(difficulty => this.difficulties.push(difficulty));

    this.cuisineService.getAllCuisines();
    this.cuisineService.returnCuisineList().subscribe(cuisineList => (this.cuisineList = cuisineList));
    this.continentList = this.cuisineService.getContinentList();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.clearService.getClear().subscribe(clear => {
      this.clear = clear;
      if (clear) {
        this.resetFilterInit();
      }
    });
  }

  ngOnInit(): void {
  }

  applyFilter() {
    const url = this.mountURL();
    this.navigationService.storeData({url: url});
    this.sendURL.emit(url);
  }

  mountURL(): string {
    let url: string = "?input=" + this.input;

    if (this.category !== undefined) {
      url = url + "&category=" + this.category;
    }

    if (this.difficultyGrade !== undefined) {
      url = url + "&difficultyGrade=" + this.difficultyGrade;
    }

    if (this.rating !== undefined) {
      url = url + "&rating=" + this.rating;
    }

    if (this.preparationTime !== undefined) {
      url = url + "&preparationTime=" + this.preparationTime;
    }

    if (this.cuisineFilter !== undefined) {
      url = url + "&cuisine=" + this.cuisineFilter.country;
    }

    return url;
  }

  resetFilterButton() {
    this.difficultyGrade = undefined;
    this.category = undefined;
    this.cuisineFilter = undefined;
    this.preparationTime = undefined;
    this.rating = undefined;
    const url = this.mountURL();
    this.sendURL.emit(url);
  }

  resetFilterInit() {
    this.difficultyGrade = undefined;
    this.category = undefined;
    this.cuisineFilter = undefined;
    this.preparationTime = undefined;
    this.rating = undefined;
  }

}
