import nbt_be_binary_stream from '../utils/nbt_be_binary_stream';
declare class StringTag {
    id: number;
    name: string;
    value: string;
    constructor(name?: string, value?: string);
    read(stream: nbt_be_binary_stream): void;
    write(stream: nbt_be_binary_stream): void;
}
export default StringTag;
