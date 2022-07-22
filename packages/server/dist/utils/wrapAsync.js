"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapAsync = void 0;
const wrapAsync = (fn) => {
    return (req, res, next) => {
        const fnReturn = fn(req, res, next);
        return Promise.resolve(fnReturn).catch(next);
    };
};
exports.wrapAsync = wrapAsync;
//# sourceMappingURL=wrapAsync.js.map