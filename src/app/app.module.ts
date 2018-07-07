import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";

import { CalcitRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CalcitRoutingModule,
  ],
  providers: [],
})
export class AppModule { }
