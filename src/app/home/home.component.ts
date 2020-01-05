import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  title = "Home Page - Zen van Riel";
  constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      { name: "keywords", content: "Zen van Riel, Zen, Riel" },
      {
        name: "description",
        content:
          "This site serves as a small portfolio to post about some of my work."
      },
      { name: "robots", content: "index, follow" }
    ]);
  }
}
