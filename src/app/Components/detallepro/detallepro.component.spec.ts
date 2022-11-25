import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleproComponent } from './detallepro.component';

describe('DetalleproComponent', () => {
  let component: DetalleproComponent;
  let fixture: ComponentFixture<DetalleproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleproComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
