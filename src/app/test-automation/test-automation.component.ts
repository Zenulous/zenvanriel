import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "app-test-automation",
  templateUrl: "./test-automation.component.html",
  styleUrls: ["./test-automation.component.css"]
})
export class TestAutomationComponent implements OnInit {
  title = "Test Automation - Zen van Riel";
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      { name: "keywords", content: "Zen van Riel, Zen, Riel, Testing" },
      {
        name: "description",
        content:
          "Page about my experience in software testing throughout different scopes: unit testing, end to end testing.."
      },
      { name: "robots", content: "index, follow" }
    ]);
  }
}
