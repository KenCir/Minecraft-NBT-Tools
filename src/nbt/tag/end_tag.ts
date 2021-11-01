import TagIdentifiers from '../tag_identifiers';
import nbt_be_binary_stream from '../utils/nbt_be_binary_stream';

class EndTag {
	public id: number;

	public constructor() {
		this.id = TagIdentifiers.END_TAG;
	}

	// eslint-disable-next-line @typescript-eslint/no-empty-function, no-empty-function, @typescript-eslint/no-unused-vars
	public read(_: nbt_be_binary_stream) {
	}

	// eslint-disable-next-line @typescript-eslint/no-empty-function, no-empty-function, @typescript-eslint/no-unused-vars
	public write(_: nbt_be_binary_stream) {
	}
}

export default EndTag;