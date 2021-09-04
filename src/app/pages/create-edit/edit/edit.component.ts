import {Component, OnInit} from '@angular/core';
import {RecipeInterface} from "../../../interfaces/recipe-interface";
import {RecipeService} from "../../../services/recipe/recipe.service";
import {ActivatedRoute, Params} from "@angular/router";
import {NavigationService} from "../../../services/navigation/navigation.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  mainText: string = "EditBook";
  subText: string = "IT IS ALWAYS TIME TO MAKE CHANGES";

  public recipe?: RecipeInterface;
  public id?: number;

  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute, private navService: NavigationService) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
    })
  }

  ngOnInit(): void {
    window.scrollTo(0, 0)
    if (this.navService.loadData()) {
      this.recipe = this.navService.loadData().recipe;
    }
    if (this.recipe === undefined) {
      this.recipeService.getRecipeById(this.id!);
      this.recipeService.returnSingleRecipe().subscribe(recipe => this.recipe = recipe);
    }
  }

}
