import nbt_le_binary_stream from './nbt_le_binary_stream';
declare class nbt_net_le_binary_stream extends nbt_le_binary_stream {
    read_int_tag(): number;
    write_int_tag(value: number): void;
    read_long_tag(): number;
    write_long_tag(value: number): void;
    read_string_tag(): string;
    write_string_tag(value: string): void;
}
export default nbt_net_le_binary_stream;
