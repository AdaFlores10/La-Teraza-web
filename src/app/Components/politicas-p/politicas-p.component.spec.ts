import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticasPComponent } from './politicas-p.component';

describe('PoliticasPComponent', () => {
  let component: PoliticasPComponent;
  let fixture: ComponentFixture<PoliticasPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliticasPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliticasPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
