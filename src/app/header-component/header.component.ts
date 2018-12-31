import { Component } from "@angular/core";

import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  styleUrls: [ "./header.component.scss" ],
  templateUrl: "./header.component.html"
})

export class HeaderComponent {

  constructor(private _router: Router) { }

  navigateToHomePage(): void {
    this._router.navigateByUrl("/");
  }

  launchGithub(): void {
    window.open("https://github.com/lrcrews/sim-city-calcit", "_blank");
  }

}
