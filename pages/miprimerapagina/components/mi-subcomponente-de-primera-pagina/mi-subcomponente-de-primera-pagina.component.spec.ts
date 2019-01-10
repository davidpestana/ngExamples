import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiSubcomponenteDePrimeraPaginaComponent } from './mi-subcomponente-de-primera-pagina.component';

describe('MiSubcomponenteDePrimeraPaginaComponent', () => {
  let component: MiSubcomponenteDePrimeraPaginaComponent;
  let fixture: ComponentFixture<MiSubcomponenteDePrimeraPaginaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiSubcomponenteDePrimeraPaginaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiSubcomponenteDePrimeraPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
