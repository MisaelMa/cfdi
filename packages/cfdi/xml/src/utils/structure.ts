/* eslint-disable class-methods-use-this */
/**
 *
 */
export class Structure {
  public isActive = false;

  private tags: any = {};

  /**
   *constructor
   *
   * @param tags
   */
  constructor(tags: any = {}) {
    if (this.isEmptyObject(tags)) {
      this.isActive = false;
    } else {
      this.tags = tags;
      this.isActive = true;
    }
  }

  /**
   *isEmptyObject
   *
   * @param obj
   * object
   */
  isEmptyObject(obj: object): boolean {
    // eslint-disable-next-line no-restricted-syntax
    for (const property in obj) {
      // eslint-disable-next-line no-prototype-builtins
      if (obj.hasOwnProperty(property)) {
        return false;
      }
    }

    return true;
  }

  /**
   *tagXml
   *
   * @param tag
   * string
   */
  public tagXml(tag: string): any {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return this.tags[tag] ? this.tags[tag] : tag;
  }
}
