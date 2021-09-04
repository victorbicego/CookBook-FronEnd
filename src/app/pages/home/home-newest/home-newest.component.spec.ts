import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNewestComponent } from './home-newest.component';

describe('HomeNewestComponent', () => {
  let component: HomeNewestComponent;
  let fixture: ComponentFixture<HomeNewestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeNewestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNewestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
