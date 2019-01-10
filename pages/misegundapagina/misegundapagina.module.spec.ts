import { MisegundapaginaModule } from './misegundapagina.module';

describe('MisegundapaginaModule', () => {
  let misegundapaginaModule: MisegundapaginaModule;

  beforeEach(() => {
    misegundapaginaModule = new MisegundapaginaModule();
  });

  it('should create an instance', () => {
    expect(misegundapaginaModule).toBeTruthy();
  });
});
