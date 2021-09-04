import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeFormInfosHashtagComponent } from './recipe-form-infos-hashtag.component';

describe('RecipeFormInfosHashtagComponent', () => {
  let component: RecipeFormInfosHashtagComponent;
  let fixture: ComponentFixture<RecipeFormInfosHashtagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeFormInfosHashtagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeFormInfosHashtagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
