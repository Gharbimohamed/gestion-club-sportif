import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilressourceComponent } from './accueilressource.component';

describe('AccueilressourceComponent', () => {
  let component: AccueilressourceComponent;
  let fixture: ComponentFixture<AccueilressourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilressourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilressourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
