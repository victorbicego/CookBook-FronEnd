import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {RecipeInterface} from "../../../interfaces/recipe-interface";
import {RecipeService} from "../../../services/recipe/recipe.service";

@Component({
  selector: 'app-home-newest',
  templateUrl: './home-newest.component.html',
  styleUrls: ['./home-newest.component.css']
})
export class HomeNewestComponent implements OnInit {

  newRecipes: RecipeInterface[] = [];

  constructor(public recipeService: RecipeService, private router: Router) {
  }

  ngOnInit(): void {
    this.recipeService.getNewestRecipes();
    this.recipeService.returnTop5newestRecipesList()
      .subscribe(recipeList => this.newRecipes = recipeList);
  }

  goToSinglePageRecipe(id: number): void {
    this.router.navigate(['recipe/' + id]);
  }

}
