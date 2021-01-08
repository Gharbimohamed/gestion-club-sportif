import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireequipeComponent } from './formulaireequipe.component';

describe('FormulaireequipeComponent', () => {
  let component: FormulaireequipeComponent;
  let fixture: ComponentFixture<FormulaireequipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireequipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireequipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
