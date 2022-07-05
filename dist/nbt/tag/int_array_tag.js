"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const range_1 = __importDefault(require("../../range"));
const tag_identifiers_1 = __importDefault(require("../tag_identifiers"));
class IntArrayTag {
    constructor(name = '', value = []) {
        this.id = tag_identifiers_1.default.INT_ARRAY_TAG;
        this.name = name;
        this.value = value;
    }
    read(stream) {
        const length = stream.read_int_tag();
        this.value = [];
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        for (const _ of (0, range_1.default)(0, length)) {
            this.value.push(stream.read_int_tag());
        }
    }
    write(stream) {
        stream.write_int_tag(this.value.length);
        for (const tag of this.value) {
            stream.write_int_tag(tag);
        }
    }
}
exports.default = IntArrayTag;
//# sourceMappingURL=int_array_tag.js.map