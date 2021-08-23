import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateComponent} from "./create/create.component";
import {HomeComponent} from "./home/home.component";
import {SonginputComponent} from "./songinput/songinput.component";
import {SongeditComponent} from "./songedit/songedit.component";

const routes: Routes = [
  {path: 'create', component: SonginputComponent},
  {path: 'edit/:id', component: SongeditComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
