import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";

import { AboutPageComponent } from "./about-page-component/about-page.component";
import { PrivacyPolicyPageComponent } from "./privacy-policy-page-component/privacy-policy-page.component";
import { TablesPageComponent } from "./tables-page-component/tables-page.component";
import { TermsPageComponent } from "./terms-page-component/terms-page.component";

const routes: Routes = [
  { path: "", component: TablesPageComponent },
  { path: "about", component: AboutPageComponent },
  { path: "privacy-policy", component: PrivacyPolicyPageComponent },
  { path: "terms", component: TermsPageComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes, {scrollPositionRestoration: "enabled"}) ]
})
export class CalcitRoutingModule { }
