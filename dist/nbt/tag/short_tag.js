"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tag_identifiers_1 = __importDefault(require("../tag_identifiers"));
class ShortTag {
    constructor(name = '', value = 0) {
        this.id = tag_identifiers_1.default.SHORT_TAG;
        this.name = name;
        this.value = value;
    }
    read(stream) {
        this.value = stream.read_short_tag();
    }
    write(stream) {
        stream.write_short_tag(this.value);
    }
}
exports.default = ShortTag;
//# sourceMappingURL=short_tag.js.map