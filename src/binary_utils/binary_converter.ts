// eslint-disable-next-line @typescript-eslint/no-var-requires
const struct = require('python-struct');

class BinaryConverter {
	public static read_byte(data: Buffer): number {
		return struct.unpack('b', data)[0];
	}

	public static write_byte(value: number): Buffer {
		return struct.pack('b', value);
	}

	public static read_unsigned_byte(data: Buffer): number {
		return struct.unpack('B', data)[0];
	}

	public static write_unsigned_byte(value: number): Buffer {
		return struct.pack('B', value);
	}

	public static read_bool(data: Buffer): boolean {
		return struct.unpack('?', data)[0];
	}

	public static write_bool(value: boolean): Buffer {
		return struct.pack('?', value);
	}

	public static read_short_be(data: Buffer): number {
		return struct.unpack('>h', data)[0];
	}

	public static write_short_be(value: number): Buffer {
		return struct.pack('>h', value);
	}

	public static read_unsigned_short_be(data: Buffer): number {
		return struct.unpack('>H', data)[0];
	}

	public static write_unsigned_short_be(value: number): Buffer {
		return struct.pack('>H', value);
	}

	public static read_short_le(data: Buffer): number {
		return struct.unpack('<h', data)[0];
	}

	public static write_short_le(value: number): Buffer {
		return struct.pack('<h', value);
	}

	public static read_unsigned_short_le(data: Buffer): number {
		return struct.unpack('<H', data)[0];
	}

	public static write_unsigned_short_le(value: number): Buffer {
		return struct.pack('<H', value);
	}

	public static read_triad_be(data: Buffer): number {
		return struct.unpack('>i', '\x00' + data)[0];
	}

	public static write_triad_be(value: number): Buffer {
		return struct.pack('>i', value).slice(1, 4);
	}

	public static read_unsigned_triad_be(data: Buffer): number {
		return struct.unpack('>I', '\x00' + data)[0];
	}

	public static write_unsigned_triad_be(value: number): Buffer {
		return struct.pack('>I', value).slice(1, 4);
	}

	public static read_triad_le(data: Buffer): number {
		return struct.unpack('<i', data + '\x00')[0];
	}

	public static write_triad_le(value: number): Buffer {
		return struct.pack('<i', value).slice(0, 3);
	}

	public static read_unsigned_triad_le(data: Buffer): number {
		return struct.unpack('<I', data + '\x00')[0];
	}

	public static write_unsigned_triad_le(value: number): Buffer {
		return struct.pack('<I', value).slice(0, 3);
	}

	public static read_int_be(data: Buffer): number {
		return struct.unpack('>i', data)[0];
	}

	public static write_int_be(value: number): Buffer {
		return struct.pack('>i', value);
	}

	public static read_unsigned_int_be(data: Buffer): number {
		return struct.unpack('>I', data)[0];
	}

	public static write_unsigned_int_be(value: number): Buffer {
		return struct.pack('>I', value);
	}

	public static read_int_le(data: Buffer): number {
		return struct.unpack('<i', data)[0];
	}

	public static write_int_le(value: number): Buffer {
		return struct.pack('<i', value);
	}

	public static read_unsigned_int_le(data: Buffer): number {
		return struct.unpack('<I', data)[0];
	}

	public static write_unsigned_int_le(value: number): Buffer {
		return struct.pack('<I', value);
	}

	public static read_long_be(data: Buffer): number {
		return struct.unpack('>q', data)[0];
	}

	public static write_long_be(value: number): Buffer {
		return struct.pack('>q', value);
	}

	public static read_unsigned_long_be(data: Buffer): number {
		return struct.unpack('>Q', data)[0];
	}

	public static write_unsigned_long_be(value: number): Buffer {
		return struct.pack('>Q', value);
	}

	public static read_long_le(data: Buffer): number {
		return struct.unpack('<q', data)[0];
	}

	public static write_long_le(value: number): Buffer {
		return struct.pack('<q', value);
	}

	public static read_unsigned_long_le(data: Buffer): number {
		return struct.unpack('<Q', data)[0];
	}

	public static write_unsigned_long_le(value: number): Buffer {
		return struct.pack('<Q', value);
	}

	public static read_float_be(data: Buffer): number {
		return struct.unpack('>f', data)[0];
	}

	public static write_float_be(value: number): Buffer {
		return struct.pack('>f', value);
	}

	public static read_float_le(data: Buffer): number {
		return struct.unpack('<f', data)[0];
	}

	public static write_float_le(value: number): Buffer {
		return struct.pack('<f', value);
	}

	public static read_double_be(data: Buffer): number {
		return struct.unpack('>d', data)[0];
	}

	public static write_double_be(value: number): Buffer {
		return struct.pack('>d', value);
	}

	public static read_double_le(data: Buffer): number {
		return struct.unpack('<d', data)[0];
	}

	public static write_double_le(value: number): Buffer {
		return struct.pack('<d', value);
	}
}

export default BinaryConverter;