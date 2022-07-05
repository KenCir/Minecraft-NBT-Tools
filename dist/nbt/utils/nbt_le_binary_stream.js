"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const binary_stream_1 = __importDefault(require("../../binary_utils/binary_stream"));
const end_tag_1 = __importDefault(require("../tag/end_tag"));
const nbt_1 = __importDefault(require("./nbt"));
class nbt_le_binary_stream extends binary_stream_1.default {
    read_byte_tag() {
        return this.read_byte();
    }
    write_byte_tag(value) {
        this.write_byte(value);
    }
    read_short_tag() {
        return this.read_short_le();
    }
    write_short_tag(value) {
        this.write_short_le(value);
    }
    read_int_tag() {
        return this.read_int_le();
    }
    write_int_tag(value) {
        this.write_int_le(value);
    }
    read_long_tag() {
        return this.read_long_le();
    }
    write_long_tag(value) {
        this.write_long_le(value);
    }
    read_float_tag() {
        return this.read_float_le();
    }
    write_float_tag(value) {
        this.write_float_le(value);
    }
    read_double_tag() {
        return this.read_double_le();
    }
    write_double_tag(value) {
        this.write_double_le(value);
    }
    read_string_tag() {
        return this.read(this.read_unsigned_short_le()).toString();
    }
    write_string_tag(value) {
        this.write_unsigned_short_le(value.length);
        this.write(Buffer.from(value));
    }
    read_root_tag() {
        if (!this.feos()) {
            const new_tag = nbt_1.default.new_tag(this.read_byte_tag());
            if (typeof new_tag === 'undefined')
                return undefined;
            if (!(new_tag instanceof end_tag_1.default)) {
                new_tag.name = this.read_string_tag();
                new_tag.read(this);
            }
            return new_tag;
        }
    }
    write_root_tag(value) {
        this.write_byte_tag(value.id);
        if (!(value instanceof end_tag_1.default)) {
            this.write_string_tag(value.name);
            value.write(this);
        }
    }
}
exports.default = nbt_le_binary_stream;
//# sourceMappingURL=nbt_le_binary_stream.js.map