import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {RecipeInterface} from "../../../../interfaces/recipe-interface";
import {NavigationService} from "../../../../services/navigation/navigation.service";

@Component({
  selector: 'app-recipe-interaction-menu',
  templateUrl: './recipe-interaction-menu.component.html',
  styleUrls: ['./recipe-interaction-menu.component.css']
})
export class RecipeInteractionMenuComponent implements OnInit {

  @Input() dark!: boolean;
  @Input() recipe!: RecipeInterface;
  @Input() average!: number;

  @Output() onDark = new EventEmitter<any>();

  constructor(private navService: NavigationService) {
  }

  ngOnInit(): void {
  }

  favorite() {
  }

  selectDark() {
    this.onDark.emit()
  }

  goToPrint() {
    this.navService.navigateAndStoreData("/print/" + this.recipe.id, {recipe: this.recipe, average: this.average});
  }

}
