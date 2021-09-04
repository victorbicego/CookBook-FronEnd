import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ClearService} from "../../../services/clear/clear.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  inputText?: string;

  constructor(private router: Router, private clearService: ClearService) {
  }

  ngOnInit(): void {
  }

  navigateToResult(): void {
    this.clearService.getClear().next(true);
    this.clearService.getClear().next(false);
    this.router.navigate(['search/' + this.inputText]);
  }

  goToHomePage(): void {
    this.inputText = undefined;
    this.router.navigate(['']);
  }

  goToResult(search: string): void {
    this.inputText = search;
    this.router.navigate(['search/' + this.inputText]);
  }

}
