import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTdpComponent } from './add-tdp.component';

describe('AddTdpComponent', () => {
  let component: AddTdpComponent;
  let fixture: ComponentFixture<AddTdpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTdpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
