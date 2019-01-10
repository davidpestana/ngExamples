import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiprimerapaginaComponent } from './miprimerapagina.component';

describe('MiprimerapaginaComponent', () => {
  let component: MiprimerapaginaComponent;
  let fixture: ComponentFixture<MiprimerapaginaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiprimerapaginaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiprimerapaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
