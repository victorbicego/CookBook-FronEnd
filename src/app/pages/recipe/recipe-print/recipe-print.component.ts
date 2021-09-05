import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {RecipeService} from "../../../services/recipe/recipe.service";
import {NavigationService} from "../../../services/navigation/navigation.service";
import {RecipeInterface} from "../../../interfaces/recipe-interface";

@Component({
  selector: 'app-recipe-print',
  templateUrl: './recipe-print.component.html',
  styleUrls: ['./recipe-print.component.css']
})
export class RecipePrintComponent implements OnInit {

  public recipe!: RecipeInterface;
  public id!: number;

  constructor(private router:Router, private activatedRoute: ActivatedRoute, private recipeService: RecipeService, private navService: NavigationService) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
    })
  }

  ngOnInit(): void {
    if(this.navService.loadData()){
      this.recipe = this.navService.loadData().recipe;
    }
    if (this.recipe === undefined) {
      this.recipeService.getRecipeById(this.id);
      this.recipeService.returnSingleRecipe().subscribe(recipe => this.recipe = recipe);
    }

    setTimeout(() => {
      window.print();
      this.router.navigate(['recipe/' + this.id]);
    }, 1500);
  }

}
