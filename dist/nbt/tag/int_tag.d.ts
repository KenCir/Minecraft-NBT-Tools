import nbt_be_binary_stream from '../utils/nbt_be_binary_stream';
declare class IntTag {
    id: number;
    name: string;
    value: number;
    constructor(name?: string, value?: number);
    read(stream: nbt_be_binary_stream): void;
    write(stream: nbt_be_binary_stream): void;
}
export default IntTag;
