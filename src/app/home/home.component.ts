import { Component, OnInit, Inject } from "@angular/core";
import { LOCAL_STORAGE } from '@ng-toolkit/universal';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(@Inject(LOCAL_STORAGE) private localStorage: any, ) {}
  blogs = [];
  ngOnInit() {
    this.blogs = JSON.parse(this.localStorage.getItem("blogs"));
  }
}
