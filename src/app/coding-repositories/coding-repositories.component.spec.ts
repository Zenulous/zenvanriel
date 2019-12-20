import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingRepositoriesComponent } from './coding-repositories.component';

describe('CodingRepositoriesComponent', () => {
  let component: CodingRepositoriesComponent;
  let fixture: ComponentFixture<CodingRepositoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodingRepositoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodingRepositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
