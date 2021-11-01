import nbt_be_binary_stream from '../utils/nbt_be_binary_stream';
import TagIdentifiers from '../tag_identifiers';

class DoubleTag {
	public id: number;
	public name: string;
	public value: number;

	public constructor(name = '', value = 0.0) {
		this.id = TagIdentifiers.DOUBLE_TAG;
		this.name = name;
		this.value = value;
	}

	public read(stream: nbt_be_binary_stream): void {
		this.value = stream.read_double_tag();
	}

	public write(stream: nbt_be_binary_stream): void {
		stream.write_double_tag(this.value);
	}
}

export default DoubleTag;