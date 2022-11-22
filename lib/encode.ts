import { wordForByte } from "./words"

export interface Bufferable {
  buffer: ArrayBuffer
}

export function encode(data: ArrayBuffer | Bufferable ) : string[] {
  const buffer = data instanceof ArrayBuffer ? data : data.buffer
  const bytes = new Uint8Array(buffer)
  return Array.prototype.map.call(bytes, byte => wordForByte(byte)) as string[]
}
