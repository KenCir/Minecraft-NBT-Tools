import range from '../../range';
import Nbt from '../utils/nbt';
import nbt_be_binary_stream from '../utils/nbt_be_binary_stream';
import TagIdentifiers from '../tag_identifiers';
import ByteArrayTag from './byte_array_tag';
import ByteTag from './byte_tag';
import CompoundTag from './compound_tag';
import DoubleTag from './double_tag';
import EndTag from './end_tag';
import FloatTag from './float_tag';
import IntArrayTag from './int_array_tag';
import IntTag from './int_tag';
import LongArrayTag from './long_array_tag';
import LongTag from './long_tag';
import ShortTag from './short_tag';
import StringTag from './string_tag';

class ListTag {
	public id: number;
	public name: string;
	public value: Array<EndTag | ByteTag | ShortTag | IntTag | LongTag | FloatTag | DoubleTag | ByteArrayTag | StringTag | ListTag | CompoundTag | IntArrayTag | LongArrayTag>;
	public list_type: number;

	public constructor(name = '', value: Array<EndTag | ByteTag | ShortTag | IntTag | LongTag | FloatTag | DoubleTag | ByteArrayTag | StringTag | ListTag | CompoundTag | IntArrayTag | LongArrayTag> = [], list_type = 1) {
		this.id = TagIdentifiers.LIST_TAG;
		this.name = name;
		this.value = value;
		this.list_type = list_type;
	}

	public read(stream: nbt_be_binary_stream): void {
		this.list_type = stream.read_byte_tag();
		const size: number = stream.read_int_tag();
		const result: Array<EndTag | ByteTag | ShortTag | IntTag | LongTag | FloatTag | DoubleTag | ByteArrayTag | StringTag | ListTag | CompoundTag | IntArrayTag | LongArrayTag> = [];
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		for (const _ of range(0, size)) {
			const tag = Nbt.new_tag(this.list_type);
			if (typeof tag !== 'undefined') {
				tag.read(stream);
				result.push(tag);
			}
		}
		this.value = result;
	}

	public write(stream: nbt_be_binary_stream): void {
		stream.write_byte_tag(this.list_type);
		stream.write_int_tag(this.value.length);
		for (const item of this.value) {
			item.write(stream);
		}
	}
}

export default ListTag;