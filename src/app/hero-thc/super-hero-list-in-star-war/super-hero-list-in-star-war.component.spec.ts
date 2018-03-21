import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHeroListInStarWarComponent } from './super-hero-list-in-star-war.component';

describe('SuperHeroListInStarWarComponent', () => {
  let component: SuperHeroListInStarWarComponent;
  let fixture: ComponentFixture<SuperHeroListInStarWarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperHeroListInStarWarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperHeroListInStarWarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
