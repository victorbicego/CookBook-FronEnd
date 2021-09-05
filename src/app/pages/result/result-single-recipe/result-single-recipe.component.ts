import {Component, Input, OnInit} from '@angular/core';
import {RecipeInterface} from "../../../interfaces/recipe-interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-result-single-recipe',
  templateUrl: './result-single-recipe.component.html',
  styleUrls: ['./result-single-recipe.component.css']
})
export class ResultSingleRecipeComponent implements OnInit {

  @Input() recipe!: RecipeInterface;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goToRecipePage(id?: number): void {
    this.router.navigate(['recipe/' + id]);
  }

}
