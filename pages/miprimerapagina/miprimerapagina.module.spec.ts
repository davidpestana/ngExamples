import { MiprimerapaginaModule } from './miprimerapagina.module';

describe('MiprimerapaginaModule', () => {
  let miprimerapaginaModule: MiprimerapaginaModule;

  beforeEach(() => {
    miprimerapaginaModule = new MiprimerapaginaModule();
  });

  it('should create an instance', () => {
    expect(miprimerapaginaModule).toBeTruthy();
  });
});
