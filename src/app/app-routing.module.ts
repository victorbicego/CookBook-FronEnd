import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeMainComponent} from "./pages/home/home-main/home-main.component";
import {CreateComponent} from "./pages/create-edit/create/create.component";
import {ResultMainComponent} from "./pages/result/result-main/result-main.component";
import {EditComponent} from "./pages/create-edit/edit/edit.component";
import {RecipeMainComponent} from "./pages/recipe/recipe-section/recipe-main/recipe-main.component";
import {RecipePrintComponent} from "./pages/recipe/recipe-print/recipe-print.component";

const routes: Routes = [
  {path: 'create', component: CreateComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'recipe/:id', component: RecipeMainComponent},
  {path: 'search/:inputText', component: ResultMainComponent},
  {path: 'print/:id', component: RecipePrintComponent},
  {path: '', component: HomeMainComponent},
  {path: '**', redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
