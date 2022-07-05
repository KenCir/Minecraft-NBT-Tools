"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const range_1 = __importDefault(require("../../range"));
const nbt_1 = __importDefault(require("../utils/nbt"));
const tag_identifiers_1 = __importDefault(require("../tag_identifiers"));
class ListTag {
    constructor(name = '', value = [], list_type = 1) {
        this.id = tag_identifiers_1.default.LIST_TAG;
        this.name = name;
        this.value = value;
        this.list_type = list_type;
    }
    read(stream) {
        this.list_type = stream.read_byte_tag();
        const size = stream.read_int_tag();
        const result = [];
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        for (const _ of (0, range_1.default)(0, size)) {
            const tag = nbt_1.default.new_tag(this.list_type);
            if (typeof tag !== 'undefined') {
                tag.read(stream);
                result.push(tag);
            }
        }
        this.value = result;
    }
    write(stream) {
        stream.write_byte_tag(this.list_type);
        stream.write_int_tag(this.value.length);
        for (const item of this.value) {
            item.write(stream);
        }
    }
}
exports.default = ListTag;
//# sourceMappingURL=list_tag.js.map