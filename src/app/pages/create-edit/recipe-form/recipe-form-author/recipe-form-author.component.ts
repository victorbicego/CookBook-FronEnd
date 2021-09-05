import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {RecipeInterface} from "../../../../interfaces/recipe-interface";
import {ClearService} from "../../../../services/clear/clear.service";

@Component({
  selector: 'app-recipe-form-author',
  templateUrl: './recipe-form-author.component.html',
  styleUrls: ['./recipe-form-author.component.css']
})
export class RecipeFormAuthorComponent implements OnInit, OnChanges {

  author?: string;
  clear?: boolean;

  @Input() editRecipe?: RecipeInterface;
  @Output() sendInfo = new EventEmitter<any>();

  constructor(private clearService: ClearService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (this.editRecipe !== undefined) {
      this.author = this.editRecipe.author;
    }

    this.clearService.getClear().subscribe(clear => {
      this.clear = clear;
      if (clear) {
        this.author = "";
      }
    });

  }

  onChange(): void {
    this.sendInfo.emit(this.author);
  }

}
