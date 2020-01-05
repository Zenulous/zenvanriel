import { Component, OnInit, HostListener } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "app-browser-game",
  templateUrl: "./browser-game.component.html",
  styleUrls: ["./browser-game.component.css"]
})
export class BrowserGameComponent implements OnInit {
  title = "Browser Game - Zen van Riel";
  constructor(private titleService: Title, private metaService: Meta) {}
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
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      { name: "keywords", content: "Zen van Riel, Zen, Riel, Game" },
      {
        name: "description",
        content: "Small game playable in your browser."
      },
      { name: "robots", content: "index, follow" }
    ]);
    this.scaleGameBasedOnWindowSize();
  }
}
