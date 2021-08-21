import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  @Output() saveRecipe = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

  yesClick():void {
    this.saveRecipe.emit();
  }

}
