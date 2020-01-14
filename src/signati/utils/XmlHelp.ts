export const schema = (locations: string[]): string => {
    let schemaL: string = '';
    let i = 0;
    for (const location of locations) {
        if (i === 0) {
            schemaL += location;
        }
        schemaL += ' ' + location;
        i++;
    }
    return schemaL;
}
