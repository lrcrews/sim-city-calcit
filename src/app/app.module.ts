import { Location, LocationStrategy, PathLocationStrategy } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";

import { CalcitRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app-component/app.component";
import { ButtonComponent } from "./button-component/button.component";
import { FooterComponent } from "./footer-component/footer.component";
import { HeaderComponent } from "./header-component/header.component";
import { NavigationComponent } from "./navigation-component/navigation.component";
import { TableComponent } from "./table-component/table.component";
import { TablesPageComponent } from "./tables-page-component/tables-page.component";
import { TextInputComponent } from "./text-input-component/text-input.component";
import { ToolsPageComponent } from "./tools-page-component/tools-page.component";

import { ConfigurationService } from "./services/configuration.service";
import { ScBuilditApiService } from "./services/sc-buildit-api.service";

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    ButtonComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    TableComponent,
    TablesPageComponent,
    TextInputComponent,
    ToolsPageComponent,
  ],
  imports: [
    BrowserModule,
    CalcitRoutingModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    ConfigurationService,
    Location,
    ScBuilditApiService,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
})
export class AppModule { }
