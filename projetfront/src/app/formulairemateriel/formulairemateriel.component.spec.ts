import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairematerielComponent } from './formulairemateriel.component';

describe('FormulairematerielComponent', () => {
  let component: FormulairematerielComponent;
  let fixture: ComponentFixture<FormulairematerielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulairematerielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulairematerielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
