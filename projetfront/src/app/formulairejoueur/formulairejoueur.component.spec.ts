import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairejoueurComponent } from './formulairejoueur.component';

describe('FormulairejoueurComponent', () => {
  let component: FormulairejoueurComponent;
  let fixture: ComponentFixture<FormulairejoueurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulairejoueurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulairejoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
