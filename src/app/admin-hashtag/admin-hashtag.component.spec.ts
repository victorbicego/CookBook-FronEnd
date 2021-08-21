import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHashtagComponent } from './admin-hashtag.component';

describe('AdminHashtagComponent', () => {
  let component: AdminHashtagComponent;
  let fixture: ComponentFixture<AdminHashtagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHashtagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHashtagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
