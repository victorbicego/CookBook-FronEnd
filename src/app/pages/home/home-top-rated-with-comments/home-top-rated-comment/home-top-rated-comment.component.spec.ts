import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTopRatedCommentComponent } from './home-top-rated-comment.component';

describe('HomeTopRatedCommentComponent', () => {
  let component: HomeTopRatedCommentComponent;
  let fixture: ComponentFixture<HomeTopRatedCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTopRatedCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTopRatedCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
