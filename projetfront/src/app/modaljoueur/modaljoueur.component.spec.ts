import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaljoueurComponent } from './modaljoueur.component';

describe('ModaljoueurComponent', () => {
  let component: ModaljoueurComponent;
  let fixture: ComponentFixture<ModaljoueurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaljoueurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaljoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
