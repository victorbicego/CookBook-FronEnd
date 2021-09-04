import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeFormNameCategoryCuisineComponent } from './recipe-form-name-category-cuisine.component';

describe('RecipeFormNameCategoryCuisineComponent', () => {
  let component: RecipeFormNameCategoryCuisineComponent;
  let fixture: ComponentFixture<RecipeFormNameCategoryCuisineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeFormNameCategoryCuisineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeFormNameCategoryCuisineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
