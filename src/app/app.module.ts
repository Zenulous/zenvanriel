import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { TestAutomationComponent } from "./test-automation/test-automation.component";
import { CodingRepositoriesComponent } from "./coding-repositories/coding-repositories.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestAutomationComponent,
    CodingRepositoriesComponent
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
