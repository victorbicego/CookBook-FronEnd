import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css']
})
export class HomeMainComponent implements OnInit {

  mainText:string = "CookBook";
  subText:string= "YOU DIGITAL RECIPE'S BOOK";

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
