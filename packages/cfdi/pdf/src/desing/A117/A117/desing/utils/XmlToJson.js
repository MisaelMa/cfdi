"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XmlToJson = void 0;
const fs_1 = require("fs");
const xml_js_1 = require("xml-js");
function XmlToJson(xmlPath) {
    const stringXml = fs_1.readFileSync(xmlPath, 'utf8');
    const options = {
        ignoreComment: true,
        alwaysChildren: true,
        compact: true,
    };
    const json = xml_js_1.xml2js(stringXml, options);
    return json;
}
exports.XmlToJson = XmlToJson;
//# sourceMappingURL=XmlToJson.js.map