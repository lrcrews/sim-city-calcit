import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";

import { AppComponent } from "./app-component/app.component";

const routes: Routes = [
  { path: "", component: AppComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class CalcitRoutingModule { }
