"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tag_identifiers_1 = __importDefault(require("../tag_identifiers"));
class FloatTag {
    constructor(name = '', value = 0.0) {
        this.id = tag_identifiers_1.default.FLOAT_TAG;
        this.name = name;
        this.value = value;
    }
    read(stream) {
        this.value = stream.read_float_tag();
    }
    write(stream) {
        stream.write_float_tag(this.value);
    }
}
exports.default = FloatTag;
//# sourceMappingURL=float_tag.js.map