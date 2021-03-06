/// <reference types="node" />
declare class BinaryStream {
    data: Buffer;
    pos: number;
    constructor(data?: Buffer, pos?: number);
    read(size: number): Buffer;
    write(data: Buffer): void;
    read_remaining(): Buffer;
    feos(): boolean;
    read_byte(): number;
    write_byte(value: number): void;
    read_unsigned_byte(): number;
    write_unsigned_byte(value: number): void;
    read_bool(): boolean;
    write_bool(value: boolean): void;
    read_short_be(): number;
    write_short_be(value: number): void;
    read_unsigned_short_be(): number;
    write_unsigned_short_be(value: number): void;
    read_short_le(): number;
    write_short_le(value: number): void;
    read_unsigned_short_le(): number;
    write_unsigned_short_le(value: number): void;
    read_triad_be(): number;
    write_triad_be(value: number): void;
    read_unsigned_triad_be(): number;
    write_unsigned_triad_be(value: number): void;
    read_triad_le(): number;
    write_triad_le(value: number): void;
    read_unsigned_triad_le(): number;
    write_unsigned_triad_le(value: number): void;
    read_int_be(): number;
    write_int_be(value: number): void;
    read_unsigned_int_be(): number;
    write_unsigned_int_be(value: number): void;
    read_int_le(): number;
    write_int_le(value: number): void;
    read_unsigned_int_le(): number;
    write_unsigned_int_le(value: number): void;
    read_long_be(): number;
    write_long_be(value: number): void;
    read_unsigned_long_be(): number;
    write_unsigned_long_be(value: number): void;
    read_long_le(): number;
    write_long_le(value: number): void;
    read_unsigned_long_le(): number;
    write_unsigned_long_le(value: number): void;
    read_float_be(): number;
    write_float_be(value: number): void;
    read_float_le(): number;
    write_float_le(value: number): void;
    read_double_be(): number;
    write_double_be(value: number): void;
    read_double_le(): number;
    write_double_le(value: number): void;
    read_var_int(): number;
    write_var_int(value: number): void;
    read_signed_var_int(): number;
    write_signed_var_int(value: number): void;
    read_var_long(): number;
    write_var_long(value: number): void;
    read_signed_var_long(): number;
    write_signed_var_long(value: number): void;
}
export default BinaryStream;
