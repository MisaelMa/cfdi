export class Structure {
    public isActive = false;
    private tags: any = {};

    constructor(tags: {}) {
        if (this.isEmptyObject(tags)) {
            this.isActive = false;
        } else {
            this.tags = tags;
            this.isActive = true;

        }
    }

    private isEmptyObject(obj: object) {
        for (const property in obj) {
            if (obj.hasOwnProperty(property)) {
                return false;
            }
        }

        return true;
    }

    public tagXml<T>(tag: string): T {
        return this.tags[tag] ? this.tags[tag] : tag
    }
}