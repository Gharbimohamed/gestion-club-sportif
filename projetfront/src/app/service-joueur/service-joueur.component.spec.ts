import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceJoueurComponent } from './service-joueur.component';

describe('ServiceJoueurComponent', () => {
  let component: ServiceJoueurComponent;
  let fixture: ComponentFixture<ServiceJoueurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceJoueurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
