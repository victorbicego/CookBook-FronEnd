import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeFormMainComponent } from './recipe-form-main.component';

describe('RecipeFormComponent', () => {
  let component: RecipeFormMainComponent;
  let fixture: ComponentFixture<RecipeFormMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeFormMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeFormMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
