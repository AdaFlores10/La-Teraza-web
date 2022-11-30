import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTdpComponent } from './edit-tdp.component';

describe('EditTdpComponent', () => {
  let component: EditTdpComponent;
  let fixture: ComponentFixture<EditTdpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTdpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
