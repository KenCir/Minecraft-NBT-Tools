"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line @typescript-eslint/no-var-requires
const struct = require('python-struct');
class BinaryConverter {
    static read_byte(data) {
        return struct.unpack('b', data)[0];
    }
    static write_byte(value) {
        return struct.pack('b', value);
    }
    static read_unsigned_byte(data) {
        return struct.unpack('B', data)[0];
    }
    static write_unsigned_byte(value) {
        return struct.pack('B', value);
    }
    static read_bool(data) {
        return struct.unpack('?', data)[0];
    }
    static write_bool(value) {
        return struct.pack('?', value);
    }
    static read_short_be(data) {
        return struct.unpack('>h', data)[0];
    }
    static write_short_be(value) {
        return struct.pack('>h', value);
    }
    static read_unsigned_short_be(data) {
        return struct.unpack('>H', data)[0];
    }
    static write_unsigned_short_be(value) {
        return struct.pack('>H', value);
    }
    static read_short_le(data) {
        return struct.unpack('<h', data)[0];
    }
    static write_short_le(value) {
        return struct.pack('<h', value);
    }
    static read_unsigned_short_le(data) {
        return struct.unpack('<H', data)[0];
    }
    static write_unsigned_short_le(value) {
        return struct.pack('<H', value);
    }
    static read_triad_be(data) {
        return struct.unpack('>i', '\x00' + data)[0];
    }
    static write_triad_be(value) {
        return struct.pack('>i', value).slice(1, 4);
    }
    static read_unsigned_triad_be(data) {
        return struct.unpack('>I', '\x00' + data)[0];
    }
    static write_unsigned_triad_be(value) {
        return struct.pack('>I', value).slice(1, 4);
    }
    static read_triad_le(data) {
        return struct.unpack('<i', data + '\x00')[0];
    }
    static write_triad_le(value) {
        return struct.pack('<i', value).slice(0, 3);
    }
    static read_unsigned_triad_le(data) {
        return struct.unpack('<I', data + '\x00')[0];
    }
    static write_unsigned_triad_le(value) {
        return struct.pack('<I', value).slice(0, 3);
    }
    static read_int_be(data) {
        return struct.unpack('>i', data)[0];
    }
    static write_int_be(value) {
        return struct.pack('>i', value);
    }
    static read_unsigned_int_be(data) {
        return struct.unpack('>I', data)[0];
    }
    static write_unsigned_int_be(value) {
        return struct.pack('>I', value);
    }
    static read_int_le(data) {
        return struct.unpack('<i', data)[0];
    }
    static write_int_le(value) {
        return struct.pack('<i', value);
    }
    static read_unsigned_int_le(data) {
        return struct.unpack('<I', data)[0];
    }
    static write_unsigned_int_le(value) {
        return struct.pack('<I', value);
    }
    static read_long_be(data) {
        return struct.unpack('>q', data)[0];
    }
    static write_long_be(value) {
        return struct.pack('>q', value);
    }
    static read_unsigned_long_be(data) {
        return struct.unpack('>Q', data)[0];
    }
    static write_unsigned_long_be(value) {
        return struct.pack('>Q', value);
    }
    static read_long_le(data) {
        return struct.unpack('<q', data)[0];
    }
    static write_long_le(value) {
        return struct.pack('<q', value);
    }
    static read_unsigned_long_le(data) {
        return struct.unpack('<Q', data)[0];
    }
    static write_unsigned_long_le(value) {
        return struct.pack('<Q', value);
    }
    static read_float_be(data) {
        return struct.unpack('>f', data)[0];
    }
    static write_float_be(value) {
        return struct.pack('>f', value);
    }
    static read_float_le(data) {
        return struct.unpack('<f', data)[0];
    }
    static write_float_le(value) {
        return struct.pack('<f', value);
    }
    static read_double_be(data) {
        return struct.unpack('>d', data)[0];
    }
    static write_double_be(value) {
        return struct.pack('>d', value);
    }
    static read_double_le(data) {
        return struct.unpack('<d', data)[0];
    }
    static write_double_le(value) {
        return struct.pack('<d', value);
    }
}
exports.default = BinaryConverter;
//# sourceMappingURL=binary_converter.js.map