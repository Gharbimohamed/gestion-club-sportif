import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairetrainerComponent } from './formulairetrainer.component';

describe('FormulairetrainerComponent', () => {
  let component: FormulairetrainerComponent;
  let fixture: ComponentFixture<FormulairetrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulairetrainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulairetrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
