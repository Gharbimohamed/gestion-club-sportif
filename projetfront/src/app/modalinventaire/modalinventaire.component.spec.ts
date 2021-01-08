import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalinventaireComponent } from './modalinventaire.component';

describe('ModalinventaireComponent', () => {
  let component: ModalinventaireComponent;
  let fixture: ComponentFixture<ModalinventaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalinventaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalinventaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
