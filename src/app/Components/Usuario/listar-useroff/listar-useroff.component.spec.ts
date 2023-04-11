import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarUseroffComponent } from './listar-useroff.component';

describe('ListarUseroffComponent', () => {
  let component: ListarUseroffComponent;
  let fixture: ComponentFixture<ListarUseroffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarUseroffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarUseroffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
