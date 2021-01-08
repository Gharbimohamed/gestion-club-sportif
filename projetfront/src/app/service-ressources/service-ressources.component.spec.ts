import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRessourcesComponent } from './service-ressources.component';

describe('ServiceRessourcesComponent', () => {
  let component: ServiceRessourcesComponent;
  let fixture: ComponentFixture<ServiceRessourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceRessourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceRessourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
