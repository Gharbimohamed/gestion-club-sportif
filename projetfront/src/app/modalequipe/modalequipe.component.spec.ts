import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalequipeComponent } from './modalequipe.component';

describe('ModalequipeComponent', () => {
  let component: ModalequipeComponent;
  let fixture: ComponentFixture<ModalequipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalequipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalequipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
