import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";

import { CalcitRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app-component/app.component";
import { BoostSelectComponent } from "./boost-select-component/boost-select.component";
import { ButtonComponent } from "./button-component/button.component";
import { FooterComponent } from "./footer-component/footer.component";
import { HeaderComponent } from "./header-component/header.component";
import { NavigationComponent } from "./navigation-component/navigation.component";
import { NumberInputComponent } from "./number-input-component/number-input.component";
import { ProducerLevelSelectComponent } from "./producer-level-select-component/producer-level-select.component";
import { TableComponent } from "./table-component/table.component";
import { TablesPageComponent } from "./tables-page-component/tables-page.component";
import { ToolsPageComponent } from "./tools-page-component/tools-page.component";

import { ConfigurationService } from "./services/configuration.service";
import { ScBuilditApiService } from "./services/sc-buildit-api.service";

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    BoostSelectComponent,
    ButtonComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    NumberInputComponent,
    ProducerLevelSelectComponent,
    TableComponent,
    TablesPageComponent,
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
    ScBuilditApiService,
  ],
})
export class AppModule { }
