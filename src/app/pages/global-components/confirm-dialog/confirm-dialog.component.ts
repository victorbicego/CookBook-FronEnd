import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  @Output() onYes = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  yesClick():void {
    this.onYes.emit();
  }

}
