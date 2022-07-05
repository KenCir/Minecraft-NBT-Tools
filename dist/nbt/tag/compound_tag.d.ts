import nbt_be_binary_stream from '../utils/nbt_be_binary_stream';
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
declare class CompoundTag {
    id: number;
    name: string;
    value: Array<EndTag | ByteTag | ShortTag | IntTag | LongTag | FloatTag | DoubleTag | ByteArrayTag | StringTag | ListTag | CompoundTag | IntArrayTag | LongArrayTag>;
    constructor(name?: string, value?: Array<EndTag | ByteTag | ShortTag | IntTag | LongTag | FloatTag | DoubleTag | ByteArrayTag | StringTag | ListTag | CompoundTag | IntArrayTag | LongArrayTag>);
    read(stream: nbt_be_binary_stream): void;
    write(stream: nbt_be_binary_stream): void;
    get_tag(name: string): EndTag | ByteTag | ShortTag | IntTag | LongTag | FloatTag | DoubleTag | ByteArrayTag | StringTag | ListTag | CompoundTag | IntArrayTag | LongArrayTag | undefined;
    has_tag(name: string): boolean;
    set_tag(tag: ByteTag | ShortTag | IntTag | LongTag | FloatTag | DoubleTag | ByteArrayTag | StringTag | ListTag | CompoundTag | IntArrayTag | LongArrayTag): void;
}
export default CompoundTag;
