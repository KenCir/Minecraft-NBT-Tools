import TagIdentifiers from '../tag_identifiers';
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

class Nbt {
	public static new_tag(tag_id: number): EndTag | ByteTag | ShortTag | IntTag | LongTag | FloatTag | DoubleTag | ByteArrayTag | StringTag | ListTag | CompoundTag | IntArrayTag | LongArrayTag | undefined {
		if (tag_id === TagIdentifiers.END_TAG) {
			return new EndTag();
		}
		if (tag_id === TagIdentifiers.BYTE_TAG) {
			return new ByteTag();
		}
		if (tag_id === TagIdentifiers.SHORT_TAG) {
			return new ShortTag();
		}
		if (tag_id === TagIdentifiers.INT_TAG) {
			return new IntTag();
		}
		if (tag_id === TagIdentifiers.LONG_TAG) {
			return new LongTag();
		}
		if (tag_id === TagIdentifiers.FLOAT_TAG) {
			return new FloatTag();
		}
		if (tag_id === TagIdentifiers.DOUBLE_TAG) {
			return new DoubleTag();
		}
		if (tag_id === TagIdentifiers.BYTE_ARRAY_TAG) {
			return new ByteArrayTag();
		}
		if (tag_id === TagIdentifiers.STRING_TAG) {
			return new StringTag();
		}
		if (tag_id === TagIdentifiers.LIST_TAG) {
			return new ListTag();
		}
		if (tag_id === TagIdentifiers.COMPOUND_TAG) {
			return new CompoundTag();
		}
		if (tag_id === TagIdentifiers.INT_ARRAY_TAG) {
			return new IntArrayTag();
		}
		if (tag_id === TagIdentifiers.LONG_ARRAY_TAG) {
			return new LongArrayTag();
		}
	}
}

export default Nbt;