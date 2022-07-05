"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tag_identifiers_1 = __importDefault(require("../tag_identifiers"));
class EndTag {
    constructor() {
        this.id = tag_identifiers_1.default.END_TAG;
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function, no-empty-function, @typescript-eslint/no-unused-vars
    read(_) {
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function, no-empty-function, @typescript-eslint/no-unused-vars
    write(_) {
    }
}
exports.default = EndTag;
//# sourceMappingURL=end_tag.js.map