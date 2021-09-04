import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultSingleRecipeComponent } from './result-single-recipe.component';

describe('ResultSingleRecipeComponent', () => {
  let component: ResultSingleRecipeComponent;
  let fixture: ComponentFixture<ResultSingleRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultSingleRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultSingleRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
