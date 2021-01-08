import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalformulaireupdateComponent } from './modalformulaireupdate.component';

describe('ModalformulaireupdateComponent', () => {
  let component: ModalformulaireupdateComponent;
  let fixture: ComponentFixture<ModalformulaireupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalformulaireupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalformulaireupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
