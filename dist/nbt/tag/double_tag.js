"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tag_identifiers_1 = __importDefault(require("../tag_identifiers"));
class DoubleTag {
    constructor(name = '', value = 0.0) {
        this.id = tag_identifiers_1.default.DOUBLE_TAG;
        this.name = name;
        this.value = value;
    }
    read(stream) {
        this.value = stream.read_double_tag();
    }
    write(stream) {
        stream.write_double_tag(this.value);
    }
}
exports.default = DoubleTag;
//# sourceMappingURL=double_tag.js.map