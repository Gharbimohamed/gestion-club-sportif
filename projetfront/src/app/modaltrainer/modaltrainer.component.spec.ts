import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaltrainerComponent } from './modaltrainer.component';

describe('ModaltrainerComponent', () => {
  let component: ModaltrainerComponent;
  let fixture: ComponentFixture<ModaltrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaltrainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaltrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
