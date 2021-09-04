import {Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import {RecipeInterface} from "../../../../interfaces/recipe-interface";
import {ClearService} from "../../../../services/clear/clear.service";

@Component({
  selector: 'app-recipe-form-instruction',
  templateUrl: './recipe-form-instruction.component.html',
  styleUrls: ['./recipe-form-instruction.component.css']
})
export class RecipeFormInstructionComponent implements OnInit, OnChanges {

  instruction?: string;
  clear?: boolean;

  @Input() editRecipe?: RecipeInterface;
  @Output() sendInfo = new EventEmitter<any>();

  constructor(private clearService: ClearService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.editRecipe !== undefined) {
      this.instruction = this.editRecipe.instruction;
    }

    this.clearService.getClear().subscribe(clear => {
      this.clear = clear;
      if (clear) {
        this.instruction = undefined;
      }
    });
  }

  onChange() {
    this.sendInfo.emit(this.instruction);
  }

}
