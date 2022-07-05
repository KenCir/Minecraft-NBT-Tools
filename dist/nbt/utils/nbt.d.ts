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
declare class Nbt {
    static new_tag(tag_id: number): EndTag | ByteTag | ShortTag | IntTag | LongTag | FloatTag | DoubleTag | ByteArrayTag | StringTag | ListTag | CompoundTag | IntArrayTag | LongArrayTag | undefined;
}
export default Nbt;
