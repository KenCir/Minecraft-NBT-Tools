import nbt_le_binary_stream from './nbt_le_binary_stream';

class nbt_net_le_binary_stream extends nbt_le_binary_stream {
	public read_int_tag(): number {
		return this.read_signed_var_int();
	}

	public write_int_tag(value: number): void {
		this.write_signed_var_int(value);
	}

	public read_long_tag(): number {
		return this.read_signed_var_long();
	}

	public write_long_tag(value: number): void {
		this.write_signed_var_long(value);
	}

	public read_string_tag(): string {
		return this.read(this.read_var_int()).toString();
	}

	public write_string_tag(value: string): void {
		this.write_var_int(value.length);
		this.write(Buffer.from(value));
	}
}

export default nbt_net_le_binary_stream;