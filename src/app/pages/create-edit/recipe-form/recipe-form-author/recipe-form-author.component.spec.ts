import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeFormAuthorComponent } from './recipe-form-author.component';

describe('RecipeFormAuthorComponent', () => {
  let component: RecipeFormAuthorComponent;
  let fixture: ComponentFixture<RecipeFormAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeFormAuthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeFormAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
