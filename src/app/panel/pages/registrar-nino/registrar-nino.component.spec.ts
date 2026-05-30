import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarNinoComponent } from './registrar-nino.component';

describe('RegistrarNinoComponent', () => {
  let component: RegistrarNinoComponent;
  let fixture: ComponentFixture<RegistrarNinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarNinoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarNinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
