import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecipeCardComponent } from './add-recipe-card.component';

describe('AddRecipeCardComponent', () => {
  let component: AddRecipeCardComponent;
  let fixture: ComponentFixture<AddRecipeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRecipeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecipeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
