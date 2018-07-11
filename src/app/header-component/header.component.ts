import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  styleUrls: [ "./header.component.scss" ],
  templateUrl: "./header.component.html"
})

export class HeaderComponent {

  launchGithub(): void {
    window.open("https://github.com/lrcrews/sim-city-calcit", "_blank");
  }

}
