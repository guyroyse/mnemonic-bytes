import { wordForByte } from "./words"

type TypedArray =
  Uint8Array | Uint16Array | Uint32Array | BigUint64Array |
  Int8Array | Int16Array | Int32Array | BigInt64Array |
  Float32Array | Float64Array

export function encode(data: ArrayBuffer) : string[]
export function encode(data: Uint8Array) : string[]
export function encode(data: Uint16Array) : string[]
export function encode(data: Uint32Array) : string[]
export function encode(data: BigUint64Array) : string[]
export function encode(data: Int8Array) : string[]
export function encode(data: Int16Array) : string[]
export function encode(data: Int32Array) : string[]
export function encode(data: BigInt64Array) : string[]
export function encode(data: Float32Array) : string[]
export function encode(data: Float64Array) : string[]
export function encode(data: ArrayBuffer | TypedArray ) : string[] {
  const buffer = data instanceof ArrayBuffer ? data : data.buffer
  const bytes = new Uint8Array(buffer)
  return Array.prototype.map.call(bytes, byte => wordForByte(byte)) as string[]
}
