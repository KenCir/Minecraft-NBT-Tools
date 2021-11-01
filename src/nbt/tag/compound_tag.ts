import Nbt from '../utils/nbt';
import nbt_be_binary_stream from '../utils/nbt_be_binary_stream';
import TagIdentifiers from '../tag_identifiers';
import ByteArrayTag from './byte_array_tag';
import ByteTag from './byte_tag';
import DoubleTag from './double_tag';
import EndTag from './end_tag';
import FloatTag from './float_tag';
import IntArrayTag from './int_array_tag';
import IntTag from './int_tag';
import ListTag from './list_tag';
import LongArrayTag from './long_array_tag';
import LongTag from './long_tag';
import ShortTag from './short_tag';
import StringTag from './string_tag';

class CompoundTag {
	public id: number;
	public name: string;
	public value: Array<EndTag | ByteTag | ShortTag | IntTag | LongTag | FloatTag | DoubleTag | ByteArrayTag | StringTag | ListTag | CompoundTag | IntArrayTag | LongArrayTag>;

	public constructor(name = '', value: Array<EndTag | ByteTag | ShortTag | IntTag | LongTag | FloatTag | DoubleTag | ByteArrayTag | StringTag | ListTag | CompoundTag | IntArrayTag | LongArrayTag> = []) {
		this.id = TagIdentifiers.COMPOUND_TAG;
		this.name = name;
		this.value = value;
	}

	public read(stream: nbt_be_binary_stream): void {
		const result: Array<EndTag | ByteTag | ShortTag | IntTag | LongTag | FloatTag | DoubleTag | ByteArrayTag | StringTag | ListTag | CompoundTag | IntArrayTag | LongArrayTag> = [];
		while (!stream.feos()) {
			const new_tag = Nbt.new_tag(stream.read_byte_tag());
			if (typeof new_tag === 'undefined') continue;
			if (new_tag instanceof EndTag) {
				break;
			}

			new_tag.name = stream.read_string_tag();
			new_tag.read(stream);
			result.push(new_tag);
		}
		this.value = result;
	}

	public write(stream: nbt_be_binary_stream): void {
		for (const tag of this.value) {
			if (!(tag instanceof EndTag)) {
				stream.write_byte_tag(tag.id);
				stream.write_string_tag(tag.name);
			}
			stream.write_byte_tag(0);
		}
	}

	public get_tag(name: string): EndTag | ByteTag | ShortTag | IntTag | LongTag | FloatTag | DoubleTag | ByteArrayTag | StringTag | ListTag | CompoundTag | IntArrayTag | LongArrayTag | undefined {
		for (const tag of this.value) {
			if (tag instanceof EndTag) continue;
			if (name === tag.name) {
				return tag;
			}
		}
	}

	public has_tag(name: string): boolean {
		for (const tag of this.value) {
			if (tag instanceof EndTag) continue;
			if (name === tag.name) {
				return true;
			}
		}

		return false;
	}

	public set_tag(tag: ByteTag | ShortTag | IntTag | LongTag | FloatTag | DoubleTag | ByteArrayTag | StringTag | ListTag | CompoundTag | IntArrayTag | LongArrayTag): void {
		if (!this.has_tag(tag.name)) {
			this.value.push(tag);
		}
		else {
			this.value.forEach((v, i) => {
				if (v instanceof EndTag) return;
				if (tag.name === v.name) {
					this.value[i] = tag;
				}
			});
		}
	}
}

export default CompoundTag;