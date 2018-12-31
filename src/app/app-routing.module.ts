import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";

import { TablesPageComponent } from "./tables-page-component/tables-page.component";

const routes: Routes = [
  { path: "", component: TablesPageComponent },
  { path: "tables", component: TablesPageComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class CalcitRoutingModule { }
