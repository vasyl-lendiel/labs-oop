export default class StringBuffer {
  private buffer: string;

  constructor(initial: string) {
    this.buffer = initial;
  }

  toString(): string {
    return this.buffer;
  }

  delete(start: number, end: number): void {
    this.buffer = this.buffer.slice(0, start) + this.buffer.slice(end);
  }

  append(str: string): void {
    this.buffer += str;
  }

  insert(pos: number, str: string): void {
    this.buffer = this.buffer.slice(0, pos) + str + this.buffer.slice(pos);
  }

  length(): number {
    return this.buffer.length;
  }

  byteLength(): number {
    return new TextEncoder().encode(this.buffer).length;
  }
}