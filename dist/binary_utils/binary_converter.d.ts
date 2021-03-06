/// <reference types="node" />
declare class BinaryConverter {
    static read_byte(data: Buffer): number;
    static write_byte(value: number): Buffer;
    static read_unsigned_byte(data: Buffer): number;
    static write_unsigned_byte(value: number): Buffer;
    static read_bool(data: Buffer): boolean;
    static write_bool(value: boolean): Buffer;
    static read_short_be(data: Buffer): number;
    static write_short_be(value: number): Buffer;
    static read_unsigned_short_be(data: Buffer): number;
    static write_unsigned_short_be(value: number): Buffer;
    static read_short_le(data: Buffer): number;
    static write_short_le(value: number): Buffer;
    static read_unsigned_short_le(data: Buffer): number;
    static write_unsigned_short_le(value: number): Buffer;
    static read_triad_be(data: Buffer): number;
    static write_triad_be(value: number): Buffer;
    static read_unsigned_triad_be(data: Buffer): number;
    static write_unsigned_triad_be(value: number): Buffer;
    static read_triad_le(data: Buffer): number;
    static write_triad_le(value: number): Buffer;
    static read_unsigned_triad_le(data: Buffer): number;
    static write_unsigned_triad_le(value: number): Buffer;
    static read_int_be(data: Buffer): number;
    static write_int_be(value: number): Buffer;
    static read_unsigned_int_be(data: Buffer): number;
    static write_unsigned_int_be(value: number): Buffer;
    static read_int_le(data: Buffer): number;
    static write_int_le(value: number): Buffer;
    static read_unsigned_int_le(data: Buffer): number;
    static write_unsigned_int_le(value: number): Buffer;
    static read_long_be(data: Buffer): number;
    static write_long_be(value: number): Buffer;
    static read_unsigned_long_be(data: Buffer): number;
    static write_unsigned_long_be(value: number): Buffer;
    static read_long_le(data: Buffer): number;
    static write_long_le(value: number): Buffer;
    static read_unsigned_long_le(data: Buffer): number;
    static write_unsigned_long_le(value: number): Buffer;
    static read_float_be(data: Buffer): number;
    static write_float_be(value: number): Buffer;
    static read_float_le(data: Buffer): number;
    static write_float_le(value: number): Buffer;
    static read_double_be(data: Buffer): number;
    static write_double_be(value: number): Buffer;
    static read_double_le(data: Buffer): number;
    static write_double_le(value: number): Buffer;
}
export default BinaryConverter;
