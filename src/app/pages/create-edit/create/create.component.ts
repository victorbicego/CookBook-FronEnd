import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  mainText: string = "CreateBook";
  subText: string = "LET US KNOW MORE ABOUT YOU DELICIOUS RECIPE";

  constructor() {
  }

  ngOnInit(): void {
    window.scrollTo(0, 0)
  }

}
