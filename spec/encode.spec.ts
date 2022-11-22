import { encode } from '$lib/index'

describe("#encode", () => {

  const emptyBuffer: ArrayBuffer = new Uint8Array([]).buffer
  const singleBuffer: ArrayBuffer = new Uint8Array([ 97 ]).buffer
  const fullBuffer: ArrayBuffer = new Uint8Array([ 97, 249, 254, 45, 70, 30, 175, 66 ]).buffer

  const emptyArray: string[] = []
  const singleArray: string[] = [ 'glue' ]
  const fullArray: string[] = [ 'glue', 'wiry', 'zebra', 'cost', 'dwarf', 'case', 'rock', 'dress' ]

  it.each([
    [ArrayBuffer.name, emptyBuffer],
    [Uint8ClampedArray.name, new Uint8ClampedArray(emptyBuffer)],
    [Uint8Array.name, new Uint8Array(emptyBuffer)],
    [Uint16Array.name, new Uint16Array(emptyBuffer)],
    [Uint32Array.name, new Uint32Array(emptyBuffer)],
    [BigUint64Array.name, new BigUint64Array(emptyBuffer)],
    [Int8Array.name, new Int8Array(emptyBuffer)],
    [Int16Array.name, new Int16Array(emptyBuffer)],
    [Int32Array.name, new Int32Array(emptyBuffer)],
    [BigInt64Array.name, new BigInt64Array(emptyBuffer)],
    [Float32Array.name, new Float32Array(emptyBuffer)],
    [Float64Array.name, new Float64Array(emptyBuffer)]
  ])('returns an empty array of words for an empty %s', (_, input) =>
    expect(encode(input)).toEqual(emptyArray))

  it.each([
    [ArrayBuffer.name, singleBuffer],
    [Uint8ClampedArray.name, new Uint8ClampedArray(singleBuffer)],
    [Uint8Array.name, new Uint8Array(singleBuffer)]
  ])('returns an array with the word for a single byte in %s', (_, input) =>
    expect(encode(input)).toEqual(singleArray))

  it.each([
    [ArrayBuffer.name, fullBuffer],
    [Uint8ClampedArray.name, new Uint8ClampedArray(fullBuffer)],
    [Uint8Array.name, new Uint8Array(fullBuffer)],
    [Uint16Array.name, new Uint16Array(fullBuffer)],
    [Uint32Array.name, new Uint32Array(fullBuffer)],
    [BigUint64Array.name, new BigUint64Array(fullBuffer)],
    [Int8Array.name, new Int8Array(fullBuffer)],
    [Int16Array.name, new Int16Array(fullBuffer)],
    [Int32Array.name, new Int32Array(fullBuffer)],
    [BigInt64Array.name, new BigInt64Array(fullBuffer)],
    [Float32Array.name, new Float32Array(fullBuffer)],
    [Float64Array.name, new Float64Array(fullBuffer)]
  ])("returns an array of multiple words for multiple bytes in %s", (_, input) =>
    expect(encode(input)).toEqual(fullArray))

})
