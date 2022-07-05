import nbt_be_binary_stream from '../utils/nbt_be_binary_stream';
declare class EndTag {
    id: number;
    constructor();
    read(_: nbt_be_binary_stream): void;
    write(_: nbt_be_binary_stream): void;
}
export default EndTag;
