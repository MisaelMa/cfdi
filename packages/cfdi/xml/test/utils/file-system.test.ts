import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { FileSystem } from '../../src/utils/FileSystem'

vi.mock('fs');
vi.mock('os');
vi.mock('path');

describe('FileSystem', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });




  describe('generateNameTemp', () => {
    it('debería generar un nombre temporal basado en la marca de tiempo actual', () => {
      const now = Date.now();
      vi.spyOn(Date, 'now').mockReturnValue(now);

      const tempName = FileSystem.generateNameTemp();

      expect(tempName).toBe(now.toString());
    });
  });

  describe('readFileSync', () => {
    it('debería leer el contenido de un archivo de forma síncrona', () => {
      const fileContent = 'file content';
      vi.spyOn(fs, 'readFileSync').mockReturnValue(fileContent);

      const result = FileSystem.readFileSync('path/to/file');

      expect(fs.readFileSync).toHaveBeenCalledWith('path/to/file', 'utf8');
      expect(result).toBe(fileContent);
    });
  });

  describe('getTmpFullPath', () => {
    it('debería retornar la ruta completa del archivo temporal en el directorio temporal del sistema', () => {
      vi.spyOn(os, 'tmpdir').mockReturnValue('/tmp');
      vi.spyOn(path, 'join').mockImplementation((...args) => args.join('/'));

      const result = FileSystem.getTmpFullPath('tempfile');

      expect(os.tmpdir).toHaveBeenCalled();
      expect(path.join).toHaveBeenCalledWith('/tmp', 'tempfile.xml');
      expect(result).toBe('/tmp/tempfile.xml');
    });
  });
});