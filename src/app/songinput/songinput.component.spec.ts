import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonginputComponent } from './songinput.component';

describe('SonginputComponent', () => {
  let component: SonginputComponent;
  let fixture: ComponentFixture<SonginputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SonginputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SonginputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
