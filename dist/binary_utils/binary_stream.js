"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const binary_converter_1 = __importDefault(require("./binary_converter"));
const range_1 = __importDefault(require("../range"));
class BinaryStream {
    constructor(data = Buffer.from(''), pos = 0) {
        this.data = data;
        this.pos = pos;
    }
    read(size) {
        this.pos += size;
        return this.data.slice(this.pos - size, this.pos);
    }
    write(data) {
        Buffer.concat([this.data, data]);
    }
    read_remaining() {
        return this.read(this.data.length - this.pos);
    }
    feos() {
        return this.data.length <= this.pos;
    }
    read_byte() {
        return binary_converter_1.default.read_byte(this.read(1));
    }
    write_byte(value) {
        this.write(binary_converter_1.default.write_byte(value));
    }
    read_unsigned_byte() {
        return binary_converter_1.default.read_unsigned_byte(this.read(1));
    }
    write_unsigned_byte(value) {
        this.write(binary_converter_1.default.write_unsigned_byte(value));
    }
    read_bool() {
        return binary_converter_1.default.read_bool(this.read(1));
    }
    write_bool(value) {
        this.write(binary_converter_1.default.write_bool(value));
    }
    read_short_be() {
        return binary_converter_1.default.read_short_be(this.read(2));
    }
    write_short_be(value) {
        this.write(binary_converter_1.default.write_short_be(value));
    }
    read_unsigned_short_be() {
        return binary_converter_1.default.read_unsigned_short_be(this.read(2));
    }
    write_unsigned_short_be(value) {
        this.write(binary_converter_1.default.write_unsigned_int_be(value));
    }
    read_short_le() {
        return binary_converter_1.default.read_short_le(this.read(2));
    }
    write_short_le(value) {
        this.write(binary_converter_1.default.write_short_le(value));
    }
    read_unsigned_short_le() {
        return binary_converter_1.default.read_unsigned_short_le(this.read(2));
    }
    write_unsigned_short_le(value) {
        this.write(binary_converter_1.default.write_unsigned_short_le(value));
    }
    read_triad_be() {
        return binary_converter_1.default.read_triad_be(this.read(3));
    }
    write_triad_be(value) {
        this.write(binary_converter_1.default.write_triad_be(value));
    }
    read_unsigned_triad_be() {
        return binary_converter_1.default.read_unsigned_triad_be(this.read(3));
    }
    write_unsigned_triad_be(value) {
        this.write(binary_converter_1.default.write_unsigned_triad_be(value));
    }
    read_triad_le() {
        return binary_converter_1.default.read_triad_le(this.read(3));
    }
    write_triad_le(value) {
        this.write(binary_converter_1.default.write_triad_le(value));
    }
    read_unsigned_triad_le() {
        return binary_converter_1.default.read_unsigned_triad_le(this.read(3));
    }
    write_unsigned_triad_le(value) {
        this.write(binary_converter_1.default.write_unsigned_triad_le(value));
    }
    read_int_be() {
        return binary_converter_1.default.read_int_be(this.read(4));
    }
    write_int_be(value) {
        this.write(binary_converter_1.default.write_int_be(value));
    }
    read_unsigned_int_be() {
        return binary_converter_1.default.read_unsigned_int_be(this.read(4));
    }
    write_unsigned_int_be(value) {
        this.write(binary_converter_1.default.write_unsigned_int_be(value));
    }
    read_int_le() {
        return binary_converter_1.default.read_int_le(this.read(4));
    }
    write_int_le(value) {
        this.write(binary_converter_1.default.write_int_le(value));
    }
    read_unsigned_int_le() {
        return binary_converter_1.default.read_unsigned_int_le(this.read(4));
    }
    write_unsigned_int_le(value) {
        this.write(binary_converter_1.default.write_unsigned_int_le(value));
    }
    read_long_be() {
        return binary_converter_1.default.read_long_be(this.read(8));
    }
    write_long_be(value) {
        this.write(binary_converter_1.default.write_long_be(value));
    }
    read_unsigned_long_be() {
        return binary_converter_1.default.read_unsigned_long_be(this.read(8));
    }
    write_unsigned_long_be(value) {
        this.write(binary_converter_1.default.write_unsigned_long_be(value));
    }
    read_long_le() {
        return binary_converter_1.default.read_long_le(this.read(8));
    }
    write_long_le(value) {
        this.write(binary_converter_1.default.write_long_le(value));
    }
    read_unsigned_long_le() {
        return binary_converter_1.default.read_unsigned_long_le(this.read(8));
    }
    write_unsigned_long_le(value) {
        this.write(binary_converter_1.default.write_unsigned_long_le(value));
    }
    read_float_be() {
        return binary_converter_1.default.read_float_be(this.read(4));
    }
    write_float_be(value) {
        this.write(binary_converter_1.default.write_float_be(value));
    }
    read_float_le() {
        return binary_converter_1.default.read_float_le(this.read(4));
    }
    write_float_le(value) {
        this.write(binary_converter_1.default.write_float_le(value));
    }
    read_double_be() {
        return binary_converter_1.default.read_double_le(this.read(8));
    }
    write_double_be(value) {
        this.write(binary_converter_1.default.write_double_be(value));
    }
    read_double_le() {
        return binary_converter_1.default.read_double_le(this.read(8));
    }
    write_double_le(value) {
        this.write(binary_converter_1.default.write_double_le(value));
    }
    read_var_int() {
        let value = 0;
        for (const i of (0, range_1.default)(0, 35, 7)) {
            if (this.feos()) {
                throw new Error('Data position exceeded');
            }
            const int = this.read_unsigned_byte();
            value |= ((int & 0x7f) << i);
            if ((int & 0x80) === 0) {
                return value;
            }
        }
        throw new Error('VarInt is too big');
    }
    write_var_int(value) {
        value &= 0xffffffff;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        for (const _ of (0, range_1.default)(0, 5)) {
            const to_write = value & 0x7f;
            value >>= 7;
            if (value !== 0) {
                this.write_unsigned_byte(to_write | 0x80);
            }
            else {
                this.write_unsigned_byte(to_write);
                break;
            }
        }
    }
    read_signed_var_int() {
        const raw = this.read_var_int();
        const temp = raw & 1 ? -(raw >> 1) - 1 : raw >> 1;
        return temp;
    }
    write_signed_var_int(value) {
        this.write_var_int(value >= 0 ? value << 1 : (-value - 1) << 1 | 1);
    }
    read_var_long() {
        let value = 0;
        for (const i of (0, range_1.default)(0, 70, 7)) {
            if (this.feos()) {
                throw new Error('Data position exceeded');
            }
            const int = this.read_unsigned_byte();
            value |= ((int & 0x7f) << i);
            if ((int & 0x80) === 0) {
                return value;
            }
        }
        throw new Error('VarLong is too big');
    }
    write_var_long(value) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        for (const _ of (0, range_1.default)(0, 10)) {
            const to_write = value & 0x7f;
            value >>= 7;
            if (value !== 0) {
                this.write_unsigned_byte(to_write | 0x80);
            }
            else {
                this.write_unsigned_byte(to_write);
                break;
            }
        }
    }
    read_signed_var_long() {
        const raw = this.read_var_long();
        const temp = (raw & 1) ? -(raw >> 1) - 1 : raw >> 1;
        return temp;
    }
    write_signed_var_long(value) {
        this.write_var_long(value >= 0 ? value << 1 : (-value - 1) << 1 | 1);
    }
}
exports.default = BinaryStream;
//# sourceMappingURL=binary_stream.js.map