import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumdobleComponent } from './numdoble.component';

describe('NumdobleComponent', () => {
  let component: NumdobleComponent;
  let fixture: ComponentFixture<NumdobleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumdobleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumdobleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
