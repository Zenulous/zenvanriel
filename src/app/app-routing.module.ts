import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { TestAutomationComponent } from "./test-automation/test-automation.component";
import { CodingRepositoriesComponent } from "./coding-repositories/coding-repositories.component";
import { BrowserGameComponent } from "./browser-game/browser-game.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "test-automation",
    component: TestAutomationComponent
  },
  { path: "coding-repositories", component: CodingRepositoriesComponent },
  { path: "browser-game", component: BrowserGameComponent },
  {
    path: "**",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
