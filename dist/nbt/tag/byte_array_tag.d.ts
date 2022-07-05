import nbt_be_binary_stream from '../utils/nbt_be_binary_stream';
declare class ByteArrayTag {
    id: number;
    name: string;
    value: Array<number>;
    constructor(name?: string, value?: Array<number>);
    read(stream: nbt_be_binary_stream): void;
    write(stream: nbt_be_binary_stream): void;
}
export default ByteArrayTag;
