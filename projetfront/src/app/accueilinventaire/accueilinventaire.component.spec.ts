import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilinventaireComponent } from './accueilinventaire.component';

describe('AccueilinventaireComponent', () => {
  let component: AccueilinventaireComponent;
  let fixture: ComponentFixture<AccueilinventaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilinventaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilinventaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
