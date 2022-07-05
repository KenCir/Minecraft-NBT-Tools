"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tag_identifiers_1 = __importDefault(require("../tag_identifiers"));
class IntTag {
    constructor(name = '', value = 0) {
        this.id = tag_identifiers_1.default.INT_TAG;
        this.name = name;
        this.value = value;
    }
    read(stream) {
        this.value = stream.read_int_tag();
    }
    write(stream) {
        stream.write_int_tag(this.value);
    }
}
exports.default = IntTag;
//# sourceMappingURL=int_tag.js.map