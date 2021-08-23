import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsMultiComponent } from './chips-multi.component';

describe('ChipsMultiComponent', () => {
  let component: ChipsMultiComponent;
  let fixture: ComponentFixture<ChipsMultiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipsMultiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
