// @ts-ignore
import { save } from 'save-file';

import { Generic } from './generic';

/**
 *
 */
export class PDF<T extends Generic> {
  desing: T;

  /**
   *
   * @param desing
   */
  constructor(desing: T) {
    this.desing = desing;
  }

  /**
   *
   */
  private async pdf<TCP>(): Promise<TCP> {
    return this.desing.getDocument();
  }

  /**
   *
   * @param path
   */
  public async save(path: string) {
    const dir = `${path}.pdf`;
    try {
      const buffer = await this.getBuffer();
      save(buffer, dir);
      return {
        save: true,
        path: dir,
      };
    } catch (e) {
      return {
        save: false,
        error: e,
      };
    }
  }

  /**
   *
   * @param options
   */
  public async getBlob<TCP, B>(options?: B): Promise<Blob> {
    return new Promise(async (resolve, reject) => {
      const doc = await this.pdf<TCP>();
      // @ts-ignore
      doc.getBlob((result) => {
        resolve(result);
      }, options);
    });
  }

  /**
   *
   * @param options
   */
  public async getBase64<B>(options?: B): Promise<string> {
    return new Promise(async (resolve, reject) => {
      const doc = await this.pdf();
      // @ts-ignore
      doc.getBase64((result) => {
        resolve(result);
      }, options);
    });
  }

  /**
   *
   * @param options
   */
  public async getBuffer<B>(options?: B): Promise<Buffer> {
    return new Promise(async (resolve, reject) => {
      const doc = await this.pdf();
      // @ts-ignore
      doc.getBuffer((result) => {
        resolve(result);
      }, options);
    });
  }

  /**
   *
   * @param options
   */
  public async getDataUrl<B>(options?: B): Promise<string> {
    return new Promise(async (resolve, reject) => {
      const doc = await this.pdf();
      // @ts-ignore
      doc.getDataUrl((result) => {
        resolve(result);
      }, options);
    });
  }

  /**
   *
   * @param options
   */
  public async getStream<B>(options?: B) {
    const doc = await this.pdf();
    // @ts-ignore
    return doc.getStream(options);
  }
}
