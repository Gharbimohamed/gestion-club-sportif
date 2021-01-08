import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalmetrielComponent } from './modalmetriel.component';

describe('ModalmetrielComponent', () => {
  let component: ModalmetrielComponent;
  let fixture: ComponentFixture<ModalmetrielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalmetrielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalmetrielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
