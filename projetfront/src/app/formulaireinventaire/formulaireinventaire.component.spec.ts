import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireinventaireComponent } from './formulaireinventaire.component';

describe('FormulaireinventaireComponent', () => {
  let component: FormulaireinventaireComponent;
  let fixture: ComponentFixture<FormulaireinventaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireinventaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireinventaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
