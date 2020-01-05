import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BrowserGameComponent } from "./browser-game.component";

describe("BrowserGameComponent", () => {
  let component: BrowserGameComponent;
  let fixture: ComponentFixture<BrowserGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
