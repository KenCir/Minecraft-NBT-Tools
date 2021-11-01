import nbt_be_binary_stream from '../utils/nbt_be_binary_stream';
import TagIdentifiers from '../tag_identifiers';

class StringTag {
	public id: number;
	public name: string;
	public value: string;

	public constructor(name = '', value = '') {
		this.id = TagIdentifiers.STRING_TAG;
		this.name = name;
		this.value = value;
	}

	public read(stream: nbt_be_binary_stream): void {
		this.value = stream.read_string_tag();
	}

	public write(stream: nbt_be_binary_stream): void {
		stream.write_string_tag(this.value);
	}
}

export default StringTag;