import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PegawaiComponent } from './pegawai.component';

describe('PegawaiComponent', () => {
  let component: PegawaiComponent;
  let fixture: ComponentFixture<PegawaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PegawaiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PegawaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
