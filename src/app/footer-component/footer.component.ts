import { Component } from "@angular/core";

import { Router } from "@angular/router";

@Component({
  selector: "app-footer",
  styleUrls: [ "./footer.component.scss" ],
  templateUrl: "./footer.component.html"
})

export class FooterComponent {

  constructor(private _router: Router) { }

  navigateToAbout(): void {
    this._navigateToUrl("/about");
  }

  navigateToPrivacyPolicy(): void {
    this._navigateToUrl("/privacy-policy");
  }

  navigateToTerms(): void {
    this._navigateToUrl("/terms");
  }

  private _navigateToUrl(url: string): void {
    this._router.navigateByUrl(url);
  }

}
