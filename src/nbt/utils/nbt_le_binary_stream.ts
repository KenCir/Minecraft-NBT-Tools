import BinaryStream from '../../binary_utils/binary_stream';
import ByteArrayTag from '../tag/byte_array_tag';
import ByteTag from '../tag/byte_tag';
import CompoundTag from '../tag/compound_tag';
import DoubleTag from '../tag/double_tag';
import EndTag from '../tag/end_tag';
import FloatTag from '../tag/float_tag';
import IntArrayTag from '../tag/int_array_tag';
import IntTag from '../tag/int_tag';
import ListTag from '../tag/list_tag';
import LongArrayTag from '../tag/long_array_tag';
import LongTag from '../tag/long_tag';
import ShortTag from '../tag/short_tag';
import StringTag from '../tag/string_tag';
import Nbt from './nbt';

class nbt_le_binary_stream extends BinaryStream {
	public read_byte_tag(): number {
		return this.read_byte();
	}

	public write_byte_tag(value: number): void {
		this.write_byte(value);
	}

	public read_short_tag(): number {
		return this.read_short_le();
	}

	public write_short_tag(value: number): void {
		this.write_short_le(value);
	}

	public read_int_tag(): number {
		return this.read_int_le();
	}

	public write_int_tag(value: number): void {
		this.write_int_le(value);
	}

	public read_long_tag(): number {
		return this.read_long_le();
	}

	public write_long_tag(value: number): void {
		this.write_long_le(value);
	}

	public read_float_tag(): number {
		return this.read_float_le();
	}

	public write_float_tag(value: number): void {
		this.write_float_le(value);
	}

	public read_double_tag(): number {
		return this.read_double_le();
	}

	public write_double_tag(value: number): void {
		this.write_double_le(value);
	}

	public read_string_tag(): string {
		return this.read(this.read_unsigned_short_le()).toString();
	}

	public write_string_tag(value: string): void {
		this.write_unsigned_short_le(value.length);
		this.write(Buffer.from(value));
	}

	public read_root_tag(): EndTag | ByteTag | ShortTag | IntTag | LongTag | FloatTag | DoubleTag | ByteArrayTag | StringTag | ListTag | CompoundTag | IntArrayTag | LongArrayTag | undefined {
		if (!this.feos()) {
			const new_tag = Nbt.new_tag(this.read_byte_tag());
			if (typeof new_tag === 'undefined') return undefined;
			if (!(new_tag instanceof EndTag)) {
				new_tag.name = this.read_string_tag();
				new_tag.read(this);
			}

			return new_tag;
		}
	}

	public write_root_tag(value: EndTag | ByteTag | ShortTag | IntTag | LongTag | FloatTag | DoubleTag | ByteArrayTag | StringTag | ListTag | CompoundTag | IntArrayTag | LongArrayTag): void {
		this.write_byte_tag(value.id);
		if (!(value instanceof EndTag)) {
			this.write_string_tag(value.name);
			value.write(this);
		}
	}
}

export default nbt_le_binary_stream;