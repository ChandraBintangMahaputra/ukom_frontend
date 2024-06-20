import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tugas1Component } from './tugas1.component';

describe('Tugas1Component', () => {
  let component: Tugas1Component;
  let fixture: ComponentFixture<Tugas1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tugas1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Tugas1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
