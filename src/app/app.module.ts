import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";

import { CalcitRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app-component/app.component";
import { FooterComponent } from "./footer-component/footer.component";
import { HeaderComponent } from "./header-component/header.component";

import { ConfigurationService } from "./services/configuration.service";
import { ScBuilditApiService } from "./services/sc-buildit-api.service";

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    CalcitRoutingModule,
    HttpModule,
  ],
  providers: [
    ConfigurationService,
    ScBuilditApiService
  ],
})
export class AppModule { }
