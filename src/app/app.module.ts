import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {TitleCasePipe} from "./pipes/title-case.pipe";
import {FilterByContinentPipe} from "./pipes/filter-by-continent.pipe";
import {HeaderComponent} from './pages/global-components/header/header.component';
import {FooterComponent} from './pages/global-components/footer/footer.component';
import {ConfirmDialogComponent} from './pages/global-components/confirm-dialog/confirm-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {HomeMainComponent} from './pages/home/home-main/home-main.component';
import {PageTitleComponent} from './pages/global-components/page-title/page-title.component';
import {MatCardModule} from "@angular/material/card";
import {HomeTopRatedComponent} from './pages/home/home-top-rated-with-comments/home-top-rated/home-top-rated.component';
import {MatTabsModule} from "@angular/material/tabs";
import {HomeTopRatedCommentComponent} from './pages/home/home-top-rated-with-comments/home-top-rated-comment/home-top-rated-comment.component';
import {HomeNewestComponent} from './pages/home/home-newest/home-newest.component';
import {AddRecipeCardComponent} from './pages/global-components/add-recipe-card/add-recipe-card.component';
import {CreateComponent} from './pages/create-edit/create/create.component';
import {EditComponent} from './pages/create-edit/edit/edit.component';
import {RecipeFormMainComponent} from './pages/create-edit/recipe-form/recipe-form-main/recipe-form-main.component';
import {RecipeFormAuthorComponent} from './pages/create-edit/recipe-form/recipe-form-author/recipe-form-author.component';
import {RecipeFormIngredientComponent} from './pages/create-edit/recipe-form/recipe-form-ingredient/recipe-form-ingredient.component';
import {RecipeFormInstructionComponent} from './pages/create-edit/recipe-form/recipe-form-instruction/recipe-form-instruction.component';
import {RecipeFormNameCategoryCuisineComponent} from './pages/create-edit/recipe-form/recipe-form-name-category-cuisine/recipe-form-name-category-cuisine.component';
import {RecipeFormInfosHashtagComponent} from './pages/create-edit/recipe-form/recipe-form-infos-hashtag/recipe-form-infos-hashtag.component';
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {MatChipsModule} from "@angular/material/chips";
import {RecipeMainComponent} from './pages/recipe/recipe-section/recipe-main/recipe-main.component';
import {ResultMainComponent} from './pages/result/result-main/result-main.component';
import {ResultFilterComponent} from './pages/result/result-filter/result-filter.component';
import {ResultSingleRecipeComponent} from './pages/result/result-single-recipe/result-single-recipe.component';
import {MatSliderModule} from "@angular/material/slider";
import {MatPaginatorModule} from "@angular/material/paginator";
import { CommentMainComponent } from './pages/recipe/comment-section/comment-main/comment-main.component';
import { CommentNewComponent } from './pages/recipe/comment-section/comment-new/comment-new.component';
import { CommentSingleComponent } from './pages/recipe/comment-section/comment-single/comment-single.component';
import { RecipeTitleComponent } from './pages/recipe/recipe-section/recipe-title/recipe-title.component';
import { RecipeInfosImageComponent } from './pages/recipe/recipe-section/recipe-infos-image/recipe-infos-image.component';
import { RecipeIngredientsComponent } from './pages/recipe/recipe-section/recipe-ingredients/recipe-ingredients.component';
import { RecipeInteractionMenuComponent } from './pages/recipe/recipe-section/recipe-interaction-menu/recipe-interaction-menu.component';
import { RecipePrintComponent } from './pages/recipe/recipe-print/recipe-print.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleCasePipe,
    FilterByContinentPipe,
    HeaderComponent,
    FooterComponent,
    ConfirmDialogComponent,
    HomeMainComponent,
    PageTitleComponent,
    HomeTopRatedComponent,
    HomeTopRatedCommentComponent,
    HomeNewestComponent,
    AddRecipeCardComponent,
    CreateComponent,
    EditComponent,
    RecipeFormMainComponent,
    RecipeFormAuthorComponent,
    RecipeFormIngredientComponent,
    RecipeFormInstructionComponent,
    RecipeFormNameCategoryCuisineComponent,
    RecipeFormInfosHashtagComponent,
    RecipeMainComponent,
    ResultMainComponent,
    ResultFilterComponent,
    ResultSingleRecipeComponent,
    CommentMainComponent,
    CommentNewComponent,
    CommentSingleComponent,
    RecipeTitleComponent,
    RecipeInfosImageComponent,
    RecipeIngredientsComponent,
    RecipeInteractionMenuComponent,
    RecipePrintComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    MatChipsModule,
    MatSliderModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
