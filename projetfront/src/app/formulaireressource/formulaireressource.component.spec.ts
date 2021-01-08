import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireressourceComponent } from './formulaireressource.component';

describe('FormulaireressourceComponent', () => {
  let component: FormulaireressourceComponent;
  let fixture: ComponentFixture<FormulaireressourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireressourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireressourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
