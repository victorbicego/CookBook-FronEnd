import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {RecipeService} from "../services/recipe.service";
import {Observable} from "rxjs";
import {Recipe} from "../interfaces/recipe";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {

  public recipes$!: Observable<Recipe[]>;

  constructor(public recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.recipeService.getAllRecipes();
    this.recipes$ = this.recipeService.recipes$;
  }

  ngOnChanges(changes: SimpleChanges): void {

  }


}
