import { Bufferable, encode } from '$lib/index'

describe("#encode", () => {

  const emptyBufferable: Bufferable = new Uint8Array([])
  const populatedBufferable: Bufferable = new Uint8Array([ 97, 249, 254, 45, 70, 30, 175, 66 ])

  const emptyBuffer: ArrayBuffer = emptyBufferable.buffer
  const populatedBuffer: ArrayBuffer = populatedBufferable.buffer

  const emptyArray: string[] = []
  const populatedArray: string[] = [ 'glue', 'wiry', 'zebra', 'cost', 'dwarf', 'case', 'rock', 'dress' ]

  it.each([
    [ 'ArrayBuffer', emptyBuffer ],
    [ 'Bufferable', emptyBufferable ]
  ])('returns an empty array of words for an empty %s', (_, input) =>
    expect(encode(input)).toEqual(emptyArray))

  it.each([
    [ 'ArrayBuffer', populatedBuffer ],
    [ 'Bufferable', populatedBufferable ]
  ])("returns an array of multiple words for multiple bytes in %s", (_, input) =>
    expect(encode(input)).toEqual(populatedArray))

})
