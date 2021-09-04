import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-recipe-card',
  templateUrl: './add-recipe-card.component.html',
  styleUrls: ['./add-recipe-card.component.css']
})
export class AddRecipeCardComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goToCreatePage() {
    this.router.navigate(['create']);
  }

}
