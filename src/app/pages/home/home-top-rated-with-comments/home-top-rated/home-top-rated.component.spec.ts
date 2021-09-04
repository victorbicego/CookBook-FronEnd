import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTopRatedComponent } from './home-top-rated.component';

describe('HomeTopRatedComponent', () => {
  let component: HomeTopRatedComponent;
  let fixture: ComponentFixture<HomeTopRatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTopRatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTopRatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
