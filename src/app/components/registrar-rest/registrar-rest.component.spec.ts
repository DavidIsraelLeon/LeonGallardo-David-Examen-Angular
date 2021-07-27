import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarRestComponent } from './registrar-rest.component';

describe('RegistrarRestComponent', () => {
  let component: RegistrarRestComponent;
  let fixture: ComponentFixture<RegistrarRestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarRestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
