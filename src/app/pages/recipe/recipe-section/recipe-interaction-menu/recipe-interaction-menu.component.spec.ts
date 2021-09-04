import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeInteractionMenuComponent } from './recipe-interaction-menu.component';

describe('RecipeInteractionMenuComponent', () => {
  let component: RecipeInteractionMenuComponent;
  let fixture: ComponentFixture<RecipeInteractionMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeInteractionMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeInteractionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
