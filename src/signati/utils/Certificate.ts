import { spawn } from 'child_process';
import { openssl } from './Openssl';
import { Cer } from '../Interface/certificate.interface';
import { FileSystem } from './FileSystem';

class Certificate {
  private path = '';
  public keyPem = '';
  public cerPem = '';
  public pfx = '';
  private return = [];

  async generaKeyPem(filePathKey: string, outputpath: string) {
    return 1;
  }

  async generaCerPem(filePathCer: string, outputpath: string) {
    return 1;
  }

  async getKey(keyfile: string, password: string): Promise<string> {
    return await openssl.getKey({ keyfile, pass: password });
  }

  async getCer(cerpath: string): Promise<Cer> {
    return {
      cer: await openssl.getCer(cerpath, true),
      nocer: await openssl.getNoCer(cerpath),
    };
  }

  async agetCerPem(cerpempath: string) {
    return 1;
  }

  async getCerFile(cerfile: string) {
    return 1;
  }

  async generaPFX() {
    return 1;
  }

  async getSerialCert() {
    return 1;
  }

  async getFechaInicio() {
    return 1;
  }

  async getFechaVigencia() {
    return 1;
  }

  async validarCertificado() {
    return 1;
  }

  async pareja() {
    return 1;
  }

  async certificadoBase64(nombreCer: any) {
    return 1;
  }
}

export const certificate = new Certificate();
