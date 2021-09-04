import {Component, Input, OnInit} from '@angular/core';
import {RecipeInterface} from "../../../../interfaces/recipe-interface";

@Component({
  selector: 'app-recipe-infos-image',
  templateUrl: './recipe-infos-image.component.html',
  styleUrls: ['./recipe-infos-image.component.css']
})
export class RecipeInfosImageComponent implements OnInit {

  @Input() dark!: boolean;
  @Input() recipe!: RecipeInterface;

  constructor() {
  }

  ngOnInit(): void {
  }

}
