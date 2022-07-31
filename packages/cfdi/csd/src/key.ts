import { readFileSync } from 'fs';
import * as crypto from 'crypto';
import { pkcs8 } from '@clir/openssl';

import { pki, util, md } from 'node-forge';
let isKey = false;
let allowedFiles = [".key", ".pem"];
let password = '';
let file = '';
let regex = new RegExp("([a-zA-Z0-9\s_\\.\-:])+(" + allowedFiles.join('|') + ")$");
export const setFile = (keyfile: string, pass: string) => {

  const typeFile = keyfile.match(/\.[0-9a-z]+$/i)
  if (typeFile && typeFile.length > 0) {
    if (regex.test(keyfile.toLowerCase())) {
      file = keyfile
      password = pass
      console.log("typeFile", typeFile[0])
      if (typeFile[0] === '.key') {
        isKey = true
      }
    } else {
      console.log("files not suported")
    }
  }
}


export const getPem = (options = { begin: false }): string => {
  const cli = pkcs8.inform('DER').in(file).outform('PEM').passin(`pass:${password}`)
  try {
    const { begin } = options
    let pem = ''
    if (isKey) {
      pem = cli.run();
    } else {
      pem = readFileSync(file, 'ascii')
    }
    if (begin) {
      return pem.replace(/(-+[^-]+-+)/g, '').replace(/\s+/g, '')
    } else {
      return pem
    }
  } catch (e) {
    const keyPem = cli.cli();
    throw new Error(keyPem);
  }
}

export const getData = () => {
  return pki.privateKeyFromPem(getPem());
}


export const signatureHexForge = (message: string) => {
  let messageDigest = md.sha256.create();
  messageDigest.update(message, 'utf8');
  const signature = getData().sign(messageDigest);
  return Buffer.from(util.binary.raw.decode(signature)).toString('hex');
  // const signatureHex = Buffer.from(raw.decode(signature)).toString('hex');
}

export const signatureHexCripto = (message: string) => {
  const signer = crypto.createSign('RSA-SHA256').update(message, 'utf8');
  const signature2Hex = signer.sign(getPem()).toString('hex');
  return signature2Hex
}

