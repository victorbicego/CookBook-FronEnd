import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeInfosImageComponent } from './recipe-infos-image.component';

describe('RecipeInfosImageComponent', () => {
  let component: RecipeInfosImageComponent;
  let fixture: ComponentFixture<RecipeInfosImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeInfosImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeInfosImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
