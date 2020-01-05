import { Component, OnInit, HostListener, Inject } from "@angular/core";

@Component({
  selector: "app-browser-game",
  templateUrl: "./browser-game.component.html",
  styleUrls: ["./browser-game.component.css"]
})
export class BrowserGameComponent implements OnInit {
  constructor() {}
  @HostListener("window:resize")
  scaleGameBasedOnWindowSize() {
    const elem = document.getElementById("game-canvas");
    let scaler = document.documentElement.clientWidth / 1600;
    if (scaler > 0.85) {
      scaler = 0.85;
    }
    elem.style.transform = `scale(${scaler}, ${scaler})`;
    elem.style.transformOrigin = "top left";
  }

  onResize() {
    this.scaleGameBasedOnWindowSize();
  }

  ngOnInit() {
    const elem = document.getElementById("game-canvas");
    elem.remove();
    const elem2 = document.getElementById("game-div");
    elem2.appendChild(elem);
    this.scaleGameBasedOnWindowSize();
  }
}
