import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCuisineComponent } from './admin-cuisine.component';

describe('AdminCuisineComponent', () => {
  let component: AdminCuisineComponent;
  let fixture: ComponentFixture<AdminCuisineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCuisineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCuisineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
