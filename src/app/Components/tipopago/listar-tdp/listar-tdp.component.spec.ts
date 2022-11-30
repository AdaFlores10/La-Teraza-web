import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTdpComponent } from './listar-tdp.component';

describe('ListarTdpComponent', () => {
  let component: ListarTdpComponent;
  let fixture: ComponentFixture<ListarTdpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTdpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
