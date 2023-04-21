import { BotaoModule } from './botao.module';

describe('BotaoModule', () => {
  let botaoModule: BotaoModule;

  beforeEach(() => {
    botaoModule = new BotaoModule();
  });

  it('should create an instance', () => {
    expect(botaoModule).toBeTruthy();
  });
});
