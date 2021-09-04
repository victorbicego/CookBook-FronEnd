import {Component, Input, OnInit} from '@angular/core';
import {RecipeInterface} from "../../../../interfaces/recipe-interface";

@Component({
  selector: 'app-recipe-ingredients',
  templateUrl: './recipe-ingredients.component.html',
  styleUrls: ['./recipe-ingredients.component.css']
})
export class RecipeIngredientsComponent implements OnInit {

  @Input() dark!:boolean;
  @Input() recipe!:RecipeInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
