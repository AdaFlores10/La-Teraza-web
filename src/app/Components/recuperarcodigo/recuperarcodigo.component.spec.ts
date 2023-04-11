import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarcodigoComponent } from './recuperarcodigo.component';

describe('RecuperarcodigoComponent', () => {
  let component: RecuperarcodigoComponent;
  let fixture: ComponentFixture<RecuperarcodigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuperarcodigoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuperarcodigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
