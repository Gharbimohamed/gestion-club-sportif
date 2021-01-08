import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceEquipeComponent } from './service-equipe.component';

describe('ServiceEquipeComponent', () => {
  let component: ServiceEquipeComponent;
  let fixture: ComponentFixture<ServiceEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceEquipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
