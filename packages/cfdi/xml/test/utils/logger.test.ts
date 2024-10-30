import { describe, it, vi, expect, afterEach } from 'vitest';
import { Logger } from '../../src/utils/logger';

describe('Logger', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('debería llamar a console.log con el mensaje INFO y argumentos adicionales', () => {
    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    const message = 'Test info message';
    const args = [42, { key: 'value' }];

    Logger.info(message, ...args);

    expect(logSpy).toHaveBeenCalledWith(`INFO: ${message}`, ...args);
    logSpy.mockRestore();
  });

  it('debería llamar a console.error con el mensaje ERROR y argumentos adicionales', () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const message = 'Test error message';
    const args = [42, { key: 'value' }];

    Logger.error(message, ...args);

    expect(errorSpy).toHaveBeenCalledWith(`ERROR: ${message}`, ...args);
    errorSpy.mockRestore();
  });

  it('debería llamar a console.warn con el mensaje WARN y argumentos adicionales', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const message = 'Test warn message';
    const args = [42, { key: 'value' }];

    Logger.warn(message, ...args);

    expect(warnSpy).toHaveBeenCalledWith(`WARN: ${message}`, ...args);
    warnSpy.mockRestore();
  });
});
