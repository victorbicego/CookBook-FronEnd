import {Component, OnInit} from '@angular/core';
import {RecipeInterface} from "../../../../interfaces/recipe-interface";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {RecipeService} from "../../../../services/recipe/recipe.service";
import {MatDialog} from "@angular/material/dialog";
import {CommentService} from "../../../../services/comment/comment.service";
import {NavigationService} from "../../../../services/navigation/navigation.service";
import {ConfirmDialogComponent} from "../../../global-components/confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'app-recipe-main',
  templateUrl: './recipe-main.component.html',
  styleUrls: ['./recipe-main.component.css']
})
export class RecipeMainComponent implements OnInit {

  public recipe!: RecipeInterface;
  public id!: number;
  public dark: boolean = false;

  mainText: string = "ReadBook";
  subText: string = "ENJOY THE RECIPE AND DON'T FORGET TO LEAVE A COMMENT";

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private recipeService: RecipeService, private dialog: MatDialog, private commentsService: CommentService, private navService: NavigationService) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
    })
  }

  ngOnInit(): void {
    window.scrollTo(0, 0)
    this.recipeService.getRecipeById(this.id);
    this.recipeService.returnSingleRecipe().subscribe(recipe => this.recipe = recipe);
  }

  delete() {
    let dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.componentInstance.onYes
      .subscribe(() => {
        this.recipeService.deleteRecipe(this.recipe!.id!);
        this.router.navigate(['']);
      })
  }

  selectDark(): void {
    this.dark = !this.dark;
  }

  goToEditPage() {
    this.navService.navigateAndStoreData("/edit/" + this.id, this.recipe);
  }

}
