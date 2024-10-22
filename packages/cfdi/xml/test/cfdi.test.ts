import { describe, it, expect, vi } from 'vitest';
import { CFDI } from '../src/CFDI';
import { Options } from '../src/types/types';
import { js2xml } from 'xml-js';
import fs from 'fs';
import path from 'path';
import { cer, key } from '@cfdi/csd';
import { FileSystem } from '../src/utils/FileSystem';
import { getOriginalString } from '../src/utils/XmlHelp';

vi.mock('@clir/saxon-he', () => ({
  Transform: vi.fn().mockImplementation(() => ({
    s: vi.fn().mockReturnThis(),
    xsl: vi.fn().mockReturnThis(),
    warnings: vi.fn().mockReturnThis(),
    run: vi.fn().mockReturnValue('CADENA_ORIGINAL'),
  })),
}));

vi.mock('../src/utils/FileSystem', () => ({
  FileSystem: {
    getTmpFullPath: vi.fn().mockReturnValue('/tmp/tempfile.xml'),
    generateNameTemp: vi.fn().mockReturnValue('tempfile'),
  },
}));

const files = path.resolve(__dirname, '..', '..', '..', 'files');

const cer_path = `${files}/certificados/LAN7008173R5.cer`;
const xslt_path = `${files}/4.0/cadenaoriginal.xslt`;

describe('CFDI', () => {
  it('debería crear una instancia de CFDI con los atributos dados', () => {
    const options: Options = { debug: true, xslt: { path: 'path/to/xslt' } };
    const cfdi = new CFDI(options);
    expect(cfdi).toBeInstanceOf(CFDI);
    expect(cfdi.isBebug).toBe(true);
  });

  it('debería certificar el CFDI', () => {
    const validateSpy = vi.spyOn(cer, 'setFile');

    const cfdi = new CFDI();
    cfdi.certificar(cer_path);

    expect(validateSpy).toHaveBeenCalledWith(cer_path);
    validateSpy.mockRestore();
    const cfdiJson = cfdi.getJsonCdfi();
    expect(cfdiJson['cfdi:Comprobante']._attributes.NoCertificado).toBe(
      '20001000000300022815'
    );
    expect(cfdiJson['cfdi:Comprobante']._attributes.Certificado).contain(
      'MIIFxTCCA62gAwIBAgIUMjAwMDEwMDAwMDAzMDAwMjI4MTUwDQYJKoZIhvcN'
    );
  });

  it('debería generar la cadena original', async () => {
    const validateSpyFsWrite = vi.spyOn(fs, 'writeFileSync');
    const validateSpyUnlinkSync = vi.spyOn(fs, 'unlinkSync');
    //const validateSpy = vi.spyOn(cer, 'setFile');
    //const validateSpy = vi.spyOn(cer, 'setFile');

    const cfdi = new CFDI({ xslt: { xslt3: false, path: xslt_path } });
    const cadenaOriginal = await cfdi.generarCadenaOriginal();
    const xml = `<?xml version="1.0" encoding="utf-8"?>
<cfdi:Comprobante>
    <cfdi:Emisor/>
    <cfdi:Receptor/>
    <cfdi:Conceptos>
    </cfdi:Conceptos>
</cfdi:Comprobante>`;
    expect(validateSpyFsWrite).toBeCalled();
    expect(validateSpyFsWrite).toHaveBeenCalledWith(
      '/tmp/tempfile.xml',
      xml,
      'utf8'
    );
    expect(FileSystem.getTmpFullPath).toHaveBeenCalled();
    expect(FileSystem.generateNameTemp).toHaveBeenCalled();
    validateSpyFsWrite.mockRestore();

    expect(cadenaOriginal).toBe('CADENA_ORIGINAL');
    expect(validateSpyUnlinkSync).toHaveBeenCalledWith('/tmp/tempfile.xml');
    validateSpyUnlinkSync.mockRestore();
  });
  /*
  it('debería generar el sello', async () => {
    const cfdi = new CFDI();
    const sello = await cfdi.generarSello('CADENA_ORIGINAL', 'path/to/key.key', 'password');
    expect(key.setFile).toHaveBeenCalledWith('path/to/key.key', 'password');
    expect(key.signatureHexForge).toHaveBeenCalledWith('CADENA_ORIGINAL');
    expect(sello).toBe('SIGNATURE_HEX');
  });

  it('debería sellar el CFDI', async () => {
    const cfdi = new CFDI();
    vi.spyOn(cfdi, 'generarCadenaOriginal').mockResolvedValue('CADENA_ORIGINAL');
    vi.spyOn(cfdi, 'generarSello').mockResolvedValue('SIGNATURE_HEX');
    await cfdi.sellar('path/to/key.key', 'password');
    expect(cfdi.cadenaOriginal).toBe('CADENA_ORIGINAL');
    expect(cfdi.sello).toBe('SIGNATURE_HEX');
    expect(cfdi.xml['cfdi:Comprobante']._attributes.Sello).toBe('SIGNATURE_HEX');
  });

  it('debería retornar el JSON del CFDI', () => {
    const cfdi = new CFDI();
    const jsonCdfi = cfdi.getJsonCdfi();
    expect(jsonCdfi).toEqual(cfdi.xml);
  });

  it('debería retornar el XML del CFDI', async () => {
    const cfdi = new CFDI();
    const xmlCdfi = await cfdi.getXmlCdfi();
    expect(js2xml).toHaveBeenCalledWith(cfdi.xml, { compact: true, ignoreComment: true, spaces: 4 });
    expect(xmlCdfi).toBe('<xml>mocked</xml>');
  });

  it('debería guardar el archivo', () => {
    const cfdi = new CFDI();
    const result = cfdi.saveFile('fileContent', '/path/to/save/', 'filename');
    expect(fs.writeFileSync).toHaveBeenCalledWith('/path/to/save/filename.xml', Buffer.from('fileContent', 'base64'), 'utf8');
    expect(result).toBe(true);
  });

  it('debería manejar errores al guardar el archivo', () => {
    const cfdi = new CFDI();
    vi.spyOn(fs, 'writeFileSync').mockImplementation(() => {
      throw new Error('Error writing file');
    });
    const result = cfdi.saveFile('fileContent', '/path/to/save/', 'filename');
    expect(result).toBe(false);
  }); */
});
