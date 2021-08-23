import {Component, OnInit} from '@angular/core';
import {RecipeService} from "../services/recipe.service";
import {Recipe} from "../interfaces/recipe";
import {ActivatedRoute, Params} from "@angular/router";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-songedit',
  templateUrl: './songedit.component.html',
  styleUrls: ['./songedit.component.css']
})
export class SongeditComponent implements OnInit {

  public singleRecipe!: Recipe;
  public id!:number;

  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute,private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
    })

    this.recipeService.getRecipeById(this.id).subscribe(recipe => this.singleRecipe=recipe);

  }

}
