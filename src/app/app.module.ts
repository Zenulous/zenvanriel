import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { TestAutomationComponent } from "./test-automation/test-automation.component";
import { CodingRepositoriesComponent } from "./coding-repositories/coding-repositories.component";
import { BrowserGameComponent } from "./browser-game/browser-game.component";
import { CommonModule } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { HttpClientModule } from '@angular/common/http';
import { NgtUniversalModule } from '@ng-toolkit/universal';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestAutomationComponent,
    CodingRepositoriesComponent,
    BrowserGameComponent
  ],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), AppRoutingModule, NgbModule, CommonModule, TransferHttpCacheModule, HttpClientModule, NgtUniversalModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
