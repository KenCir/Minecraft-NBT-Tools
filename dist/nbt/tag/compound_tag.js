"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nbt_1 = __importDefault(require("../utils/nbt"));
const tag_identifiers_1 = __importDefault(require("../tag_identifiers"));
const end_tag_1 = __importDefault(require("./end_tag"));
class CompoundTag {
    constructor(name = '', value = []) {
        this.id = tag_identifiers_1.default.COMPOUND_TAG;
        this.name = name;
        this.value = value;
    }
    read(stream) {
        const result = [];
        while (!stream.feos()) {
            const new_tag = nbt_1.default.new_tag(stream.read_byte_tag());
            if (typeof new_tag === 'undefined')
                continue;
            if (new_tag instanceof end_tag_1.default) {
                break;
            }
            new_tag.name = stream.read_string_tag();
            new_tag.read(stream);
            result.push(new_tag);
        }
        this.value = result;
    }
    write(stream) {
        for (const tag of this.value) {
            if (!(tag instanceof end_tag_1.default)) {
                stream.write_byte_tag(tag.id);
                stream.write_string_tag(tag.name);
            }
            stream.write_byte_tag(0);
        }
    }
    get_tag(name) {
        for (const tag of this.value) {
            if (tag instanceof end_tag_1.default)
                continue;
            if (name === tag.name) {
                return tag;
            }
        }
    }
    has_tag(name) {
        for (const tag of this.value) {
            if (tag instanceof end_tag_1.default)
                continue;
            if (name === tag.name) {
                return true;
            }
        }
        return false;
    }
    set_tag(tag) {
        if (!this.has_tag(tag.name)) {
            this.value.push(tag);
        }
        else {
            this.value.forEach((v, i) => {
                if (v instanceof end_tag_1.default)
                    return;
                if (tag.name === v.name) {
                    this.value[i] = tag;
                }
            });
        }
    }
}
exports.default = CompoundTag;
//# sourceMappingURL=compound_tag.js.map