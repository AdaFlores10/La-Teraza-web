import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCatComponent } from './listar-cat.component';

describe('ListarCatComponent', () => {
  let component: ListarCatComponent;
  let fixture: ComponentFixture<ListarCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
