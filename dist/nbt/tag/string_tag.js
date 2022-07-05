"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tag_identifiers_1 = __importDefault(require("../tag_identifiers"));
class StringTag {
    constructor(name = '', value = '') {
        this.id = tag_identifiers_1.default.STRING_TAG;
        this.name = name;
        this.value = value;
    }
    read(stream) {
        this.value = stream.read_string_tag();
    }
    write(stream) {
        stream.write_string_tag(this.value);
    }
}
exports.default = StringTag;
//# sourceMappingURL=string_tag.js.map