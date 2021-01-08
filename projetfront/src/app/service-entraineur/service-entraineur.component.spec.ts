import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceEntraineurComponent } from './service-entraineur.component';

describe('ServiceEntraineurComponent', () => {
  let component: ServiceEntraineurComponent;
  let fixture: ComponentFixture<ServiceEntraineurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceEntraineurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceEntraineurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
