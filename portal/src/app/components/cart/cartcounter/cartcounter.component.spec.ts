import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartcounterComponent } from './cartcounter.component';

describe('CartcounterComponent', () => {
  let component: CartcounterComponent;
  let fixture: ComponentFixture<CartcounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartcounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartcounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
