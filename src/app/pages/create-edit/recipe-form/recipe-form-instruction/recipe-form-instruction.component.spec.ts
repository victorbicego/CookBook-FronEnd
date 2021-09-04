import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeFormInstructionComponent } from './recipe-form-instruction.component';

describe('RecipeFormInstructionComponent', () => {
  let component: RecipeFormInstructionComponent;
  let fixture: ComponentFixture<RecipeFormInstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeFormInstructionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeFormInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
