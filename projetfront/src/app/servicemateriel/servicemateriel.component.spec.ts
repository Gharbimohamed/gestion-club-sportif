import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicematerielComponent } from './servicemateriel.component';

describe('ServicematerielComponent', () => {
  let component: ServicematerielComponent;
  let fixture: ComponentFixture<ServicematerielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicematerielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicematerielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
