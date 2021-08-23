import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongeditComponent } from './songedit.component';

describe('SongeditComponent', () => {
  let component: SongeditComponent;
  let fixture: ComponentFixture<SongeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
