import {Component, Input, OnInit} from '@angular/core';
import {RecipeInterface} from "../../../../interfaces/recipe-interface";

@Component({
  selector: 'app-recipe-title',
  templateUrl: './recipe-title.component.html',
  styleUrls: ['./recipe-title.component.css']
})
export class RecipeTitleComponent implements OnInit {

  @Input() dark!: boolean;
  @Input() recipe!: RecipeInterface;

  constructor() {
  }

  ngOnInit(): void {
  }

}
