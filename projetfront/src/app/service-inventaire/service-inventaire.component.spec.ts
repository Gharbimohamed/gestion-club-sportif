import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceInventaireComponent } from './service-inventaire.component';

describe('ServiceInventaireComponent', () => {
  let component: ServiceInventaireComponent;
  let fixture: ComponentFixture<ServiceInventaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceInventaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceInventaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
