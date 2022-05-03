import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewModeButtonComponent } from './view-mode-button.component';

describe('ViewModeButtonComponent', () => {
  let component: ViewModeButtonComponent;
  let fixture: ComponentFixture<ViewModeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewModeButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewModeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
