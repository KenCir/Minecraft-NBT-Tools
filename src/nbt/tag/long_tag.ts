import nbt_be_binary_stream from '../utils/nbt_be_binary_stream';
import TagIdentifiers from '../tag_identifiers';

class LongTag {
	public id: number;
	public name: string;
	public value: number;

	public constructor(name = '', value = 0) {
		this.id = TagIdentifiers.LONG_TAG;
		this.name = name;
		this.value = value;
	}

	public read(stream: nbt_be_binary_stream): void {
		this.value = stream.read_long_tag();
	}

	public write(stream: nbt_be_binary_stream): void {
		stream.write_long_tag(this.value);
	}
}

export default LongTag;