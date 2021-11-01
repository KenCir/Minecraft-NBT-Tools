import range from '../../range';
import nbt_be_binary_stream from '../utils/nbt_be_binary_stream';
import TagIdentifiers from '../tag_identifiers';

class LongArrayTag {
	public id: number;
	public name: string;
	public value: Array<number>;

	public constructor(name = '', value: Array<number> = []) {
		this.id = TagIdentifiers.LONG_ARRAY_TAG;
		this.name = name;
		this.value = value;
	}

	public read(stream: nbt_be_binary_stream): void {
		const length: number = stream.read_int_tag();
		this.value = [];
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		for (const _ of range(0, length)) {
			this.value.push(stream.read_long_tag());
		}
	}

	public write(stream: nbt_be_binary_stream): void {
		stream.write_int_tag(this.value.length);
		for (const tag of this.value) {
			stream.write_long_tag(tag);
		}
	}
}

export default LongArrayTag;