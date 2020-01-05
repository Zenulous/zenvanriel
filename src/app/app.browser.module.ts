import { BrowserModule, BrowserTransferStateModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { TestAutomationComponent } from "./test-automation/test-automation.component";
import { CodingRepositoriesComponent } from "./coding-repositories/coding-repositories.component";
import { BrowserGameComponent } from "./browser-game/browser-game.component";
import { AppModule } from './app.module';

@NgModule({
  imports: [ AppRoutingModule, NgbModule, AppModule, BrowserTransferStateModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppBrowserModule {}
