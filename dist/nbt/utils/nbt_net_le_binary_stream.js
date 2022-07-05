"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nbt_le_binary_stream_1 = __importDefault(require("./nbt_le_binary_stream"));
class nbt_net_le_binary_stream extends nbt_le_binary_stream_1.default {
    read_int_tag() {
        return this.read_signed_var_int();
    }
    write_int_tag(value) {
        this.write_signed_var_int(value);
    }
    read_long_tag() {
        return this.read_signed_var_long();
    }
    write_long_tag(value) {
        this.write_signed_var_long(value);
    }
    read_string_tag() {
        return this.read(this.read_var_int()).toString();
    }
    write_string_tag(value) {
        this.write_var_int(value.length);
        this.write(Buffer.from(value));
    }
}
exports.default = nbt_net_le_binary_stream;
//# sourceMappingURL=nbt_net_le_binary_stream.js.map