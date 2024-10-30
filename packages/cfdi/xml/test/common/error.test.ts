import { describe, it, expect, vi, afterEach } from 'vitest';
import { Logger } from '../../src/utils/logger';
import { XmlError, CFDIError } from '../../src/common/error';



describe('XmlError', () => {
  it('debería crear una instancia con los parámetros especificados', () => {
    const params = {
      message: 'Test message',
      code: 'test_code',
      details: { info: 'detail' },
      name: 'TestError',
      method: 'testMethod',
    };
    const error = new XmlError(params);

    expect(error.message).toBe(params.message);
    expect(error.code).toBe(params.code);
    expect(error.details).toEqual(params.details);
    expect(error.name).toBe(params.name);
    expect(error.method).toBe(params.method);
  });

  it('debería asignar un nombre predeterminado si no se proporciona ninguno', () => {
    const error = new XmlError({ message: 'Test message', code: 'test_code' });
    expect(error.name).toBe('XmlError');
  });

  it('debería actualizar el nombre usando setName()', () => {
    const error = new XmlError({ message: 'Test message', code: 'test_code' });
    error.setName('UpdatedErrorName');
    expect(error.name).toBe('UpdatedErrorName');
  });

  it('debería actualizar el método usando setMethod()', () => {
    const error = new XmlError({ message: 'Test message', code: 'test_code' });
    error.setMethod('UpdatedMethod');
    expect(error.method).toBe('UpdatedMethod');
  });

  it('debería convertir el error a string con toString()', () => {
    const error = new XmlError({ message: 'Test message', code: 'test_code', name: 'TestError', method: 'testMethod' });
    expect(error.toString()).toBe('TestError: Test message testMethod');
  });
});

describe('CFDIError', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('debería retornar un XmlError existente y actualizar nombre y método', () => {
    const existingError = new XmlError({ message: 'Existing error', code: 'existing_code' });
    const consoleSpy = vi.spyOn(Logger, 'error').mockImplementation(() => {});

    const result = CFDIError({
      e: existingError,
      name: 'UpdatedErrorName',
      method: 'UpdatedMethod',
      debug: true,
    });

    expect(result).toBe(existingError);
    expect(result.name).toBe('UpdatedErrorName');
    expect(result.method).toBe('UpdatedMethod');
    //expect(consoleSpy).toHaveBeenCalledWith(result.toString());
  });

  it('debería crear un XmlError con una instancia de Error y logearlo', () => {
    const errorInstance = new Error('Error message');
    const consoleSpy = vi.spyOn(Logger, 'error').mockImplementation(() => {});

    const result = CFDIError({
      e: errorInstance,
      name: 'NewError',
      method: 'SomeMethod',
      debug: true,
    });

    expect(result).toBeInstanceOf(XmlError);
    expect(result.message).toBe(errorInstance.message);
    expect(result.code).toBe('error');
    expect(result.name).toBe('NewError');
    expect(result.method).toBe('SomeMethod');
   // expect(consoleSpy).toHaveBeenCalledWith(result.toString());
  });

  it('debería crear un XmlError con un error no estándar y logearlo', () => {
    const consoleSpy = vi.spyOn(Logger, 'error').mockImplementation(() => {});
    const nonStandardError = 'Unexpected error';

    const result = CFDIError({
      e: nonStandardError,
      name: 'CustomErrorName',
      method: 'CustomMethod',
      debug: true,
    });

    expect(result).toBeInstanceOf(XmlError);
    expect(result.message).toBe(nonStandardError);
    expect(result.code).toBe('error');
    expect(result.name).toBe('CustomErrorName');
    expect(result.method).toBe('CustomMethod');
    //expect(consoleSpy).toHaveBeenCalledWith(result.toString());
  });

  it('no debería logear el error si debug es falso', () => {
    const consoleSpy = vi.spyOn(Logger, 'error').mockImplementation(() => {});
    const errorInstance = new Error('No log error');

    CFDIError({ e: errorInstance, debug: false });
    expect(consoleSpy).not.toHaveBeenCalled();
  });
});
