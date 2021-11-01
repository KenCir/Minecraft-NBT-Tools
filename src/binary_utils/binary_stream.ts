import BinaryConverter from './binary_converter';
import range from '../range';

class BinaryStream {
	public data: Buffer;
	public pos: number;

	public constructor(data: Buffer = Buffer.from(''), pos = 0) {
		this.data = data;
		this.pos = pos;
	}

	public read(size: number): Buffer {
		this.pos += size;
		return this.data.slice(this.pos - size, this.pos);
	}

	public write(data: Buffer): void {
		Buffer.concat([this.data, data]);
	}

	public read_remaining(): Buffer {
		return this.read(this.data.length - this.pos);
	}

	public feos(): boolean {
		return this.data.length <= this.pos;
	}

	public read_byte(): number {
		return BinaryConverter.read_byte(this.read(1));
	}

	public write_byte(value: number): void {
		this.write(BinaryConverter.write_byte(value));
	}

	public read_unsigned_byte(): number {
		return BinaryConverter.read_unsigned_byte(this.read(1));
	}

	public write_unsigned_byte(value: number): void {
		this.write(BinaryConverter.write_unsigned_byte(value));
	}

	public read_bool(): boolean {
		return BinaryConverter.read_bool(this.read(1));
	}

	public write_bool(value: boolean): void {
		this.write(BinaryConverter.write_bool(value));
	}

	public read_short_be(): number {
		return BinaryConverter.read_short_be(this.read(2));
	}

	public write_short_be(value: number): void {
		this.write(BinaryConverter.write_short_be(value));
	}

	public read_unsigned_short_be(): number {
		return BinaryConverter.read_unsigned_short_be(this.read(2));
	}

	public write_unsigned_short_be(value: number): void {
		this.write(BinaryConverter.write_unsigned_int_be(value));
	}

	public read_short_le(): number {
		return BinaryConverter.read_short_le(this.read(2));
	}

	public write_short_le(value: number): void {
		this.write(BinaryConverter.write_short_le(value));
	}

	public read_unsigned_short_le(): number {
		return BinaryConverter.read_unsigned_short_le(this.read(2));
	}

	public write_unsigned_short_le(value: number): void {
		this.write(BinaryConverter.write_unsigned_short_le(value));
	}

	public read_triad_be(): number {
		return BinaryConverter.read_triad_be(this.read(3));
	}

	public write_triad_be(value: number): void {
		this.write(BinaryConverter.write_triad_be(value));
	}

	public read_unsigned_triad_be(): number {
		return BinaryConverter.read_unsigned_triad_be(this.read(3));
	}

	public write_unsigned_triad_be(value: number): void {
		this.write(BinaryConverter.write_unsigned_triad_be(value));
	}

	public read_triad_le(): number {
		return BinaryConverter.read_triad_le(this.read(3));
	}

	public write_triad_le(value: number): void {
		this.write(BinaryConverter.write_triad_le(value));
	}

	public read_unsigned_triad_le(): number {
		return BinaryConverter.read_unsigned_triad_le(this.read(3));
	}

	public write_unsigned_triad_le(value: number): void {
		this.write(BinaryConverter.write_unsigned_triad_le(value));
	}

	public read_int_be(): number {
		return BinaryConverter.read_int_be(this.read(4));
	}

	public write_int_be(value: number): void {
		this.write(BinaryConverter.write_int_be(value));
	}

	public read_unsigned_int_be(): number {
		return BinaryConverter.read_unsigned_int_be(this.read(4));
	}

	public write_unsigned_int_be(value: number): void {
		this.write(BinaryConverter.write_unsigned_int_be(value));
	}

	public read_int_le(): number {
		return BinaryConverter.read_int_le(this.read(4));
	}

	public write_int_le(value: number): void {
		this.write(BinaryConverter.write_int_le(value));
	}

	public read_unsigned_int_le(): number {
		return BinaryConverter.read_unsigned_int_le(this.read(4));
	}

	public write_unsigned_int_le(value: number): void {
		this.write(BinaryConverter.write_unsigned_int_le(value));
	}

	public read_long_be(): number {
		return BinaryConverter.read_long_be(this.read(8));
	}

	public write_long_be(value: number): void {
		this.write(BinaryConverter.write_long_be(value));
	}

	public read_unsigned_long_be(): number {
		return BinaryConverter.read_unsigned_long_be(this.read(8));
	}

	public write_unsigned_long_be(value: number): void {
		this.write(BinaryConverter.write_unsigned_long_be(value));
	}

	public read_long_le(): number {
		return BinaryConverter.read_long_le(this.read(8));
	}

	public write_long_le(value: number): void {
		this.write(BinaryConverter.write_long_le(value));
	}

	public read_unsigned_long_le(): number {
		return BinaryConverter.read_unsigned_long_le(this.read(8));
	}

	public write_unsigned_long_le(value: number): void {
		this.write(BinaryConverter.write_unsigned_long_le(value));
	}

	public read_float_be(): number {
		return BinaryConverter.read_float_be(this.read(4));
	}

	public write_float_be(value: number): void {
		this.write(BinaryConverter.write_float_be(value));
	}

	public read_float_le(): number {
		return BinaryConverter.read_float_le(this.read(4));
	}

	public write_float_le(value: number): void {
		this.write(BinaryConverter.write_float_le(value));
	}

	public read_double_be(): number {
		return BinaryConverter.read_double_le(this.read(8));
	}

	public write_double_be(value: number): void {
		this.write(BinaryConverter.write_double_be(value));
	}

	public read_double_le(): number {
		return BinaryConverter.read_double_le(this.read(8));
	}

	public write_double_le(value: number): void {
		this.write(BinaryConverter.write_double_le(value));
	}

	public read_var_int(): number {
		let value = 0;

		for (const i of range(0, 35, 7)) {
			if (this.feos()) {
				throw new Error('Data position exceeded');
			}
			const int: number = this.read_unsigned_byte();

			value |= ((int & 0x7f) << i);
			if ((int & 0x80) === 0) {
				return value;
			}
		}

		throw new Error('VarInt is too big');
	}

	public write_var_int(value: number): void {
		value &= 0xffffffff;
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		for (const _ of range(0, 5)) {
			const to_write: number = value & 0x7f;
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

	public read_signed_var_int(): number {
		const raw: number = this.read_var_int();
		const temp: number = raw & 1 ? -(raw >> 1) - 1 : raw >> 1;
		return temp;
	}

	public write_signed_var_int(value: number): void {
		this.write_var_int(value >= 0 ? value << 1 : (-value - 1) << 1 | 1);
	}

	public read_var_long(): number {
		let value = 0;
		for (const i of range(0, 70, 7)) {
			if (this.feos()) {
				throw new Error('Data position exceeded');
			}
			const int: number = this.read_unsigned_byte();
			value |= ((int & 0x7f) << i);
			if ((int & 0x80) === 0) {
				return value;
			}
		}

		throw new Error('VarLong is too big');
	}

	public write_var_long(value: number): void {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		for (const _ of range(0, 10)) {
			const to_write: number = value & 0x7f;
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

	public read_signed_var_long(): number {
		const raw: number = this.read_var_long();
		const temp: number = (raw & 1) ? -(raw >> 1) - 1 : raw >> 1;
		return temp;
	}

	public write_signed_var_long(value: number): void {
		this.write_var_long(value >= 0 ? value << 1 : (-value - 1) << 1 | 1);
	}
}

export default BinaryStream;