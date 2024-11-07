import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenutablaComponentComponent } from './menutabla-component.component';

describe('MenutablaComponentComponent', () => {
  let component: MenutablaComponentComponent;
  let fixture: ComponentFixture<MenutablaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenutablaComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenutablaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
