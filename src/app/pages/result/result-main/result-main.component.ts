import {Component, OnInit, ViewChild} from '@angular/core';
import {RecipeInterface} from "../../../interfaces/recipe-interface";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {ClearService} from "../../../services/clear/clear.service";
import {NavigationService} from "../../../services/navigation/navigation.service";
import {RecipeService} from "../../../services/recipe/recipe.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-result-main',
  templateUrl: './result-main.component.html',
  styleUrls: ['./result-main.component.css']
})
export class ResultMainComponent implements OnInit {

  mainText: string = "ResultBook";
  subText: string = "IT IS TIME TO EXPLORE THE WORLD OF RECIPE";

  recipeList: RecipeInterface[] = [];
  inputText!: string;

  length!: number;
  pageSize: number = 2;
  pageSizeOptions: number[] = [2, 5, 10];
  pageIndex: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private clearService: ClearService, private navigationService: NavigationService, private recipeService: RecipeService, private activatedRoute: ActivatedRoute) {
    this.recipeService.returnResultRecipesList().subscribe(recipeList => this.recipeList = recipeList)
    this.recipeService.returnTotalByInputAndFilter().subscribe(total => this.length = total);
  }

  ngOnInit(): void {
    window.scrollTo(0, 0)

    this.activatedRoute.params.subscribe((params: Params) => {
      this.inputText = params['inputText'];
      const url = "?input=" + this.inputText;
      this.navigationService.storeData({url: url});

      if (this.paginator) {
        this.paginator.firstPage();
      }

      this.recipeService.getAllRecipesByInputAndFilter(url, this.pageIndex, this.pageSize);
      this.recipeService.countAllRecipesByInputAndFilter(url);
    });
  }

  paginatorEvent(pageEvent: PageEvent) {
    this.pageSize = pageEvent.pageSize;
    this.pageIndex = pageEvent.pageIndex;
    const url = this.navigationService.loadData().url;
    this.recipeService.countAllRecipesByInputAndFilter(url);
    this.recipeService.getAllRecipesByInputAndFilter(url, this.pageIndex, this.pageSize);
  }

  getUrlFromFilter(url: string) {
    if (this.paginator) {
      this.paginator.firstPage();
    }
    this.navigationService.storeData({url:url});
    this.recipeService.countAllRecipesByInputAndFilter(url);
    this.recipeService.getAllRecipesByInputAndFilter(url, this.pageIndex, this.pageSize);
  }
}
