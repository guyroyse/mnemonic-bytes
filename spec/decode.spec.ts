import { decode } from '$lib/index'

describe("#decode", () => {

  const emptyArray = new Uint8Array()
  const singleArray = new Uint8Array([ 97 ])
  const fullArray = new Uint8Array([ 97, 249, 254, 45, 70, 30, 175, 66 ])

  const emptyString = ''
  const singleString = 'glue'
  const whitespaceString = ' \t\r\n'
  const singleWhitespaceString = ' \t\r\nglue\t\r\n '
  const singleInvalidString = 'foo'
  const fullString = 'glue wiry zebra cost dwarf case rock dress'
  const fullWhitespaceString = '  glue\nwiry      zebra\tcost\rdwarf \t\n case \r\n\t rock dress  '
  const fullInvalidString = 'glue wiry foo zebra cost'

  const emptyStringArray: string[] = []
  const singleEmptyStringArray: string[] = [ emptyString ]
  const singleWhitespaceStringArray: string[] = [ whitespaceString ]
  const singleStringArray: string[] = [ singleString ]
  const singleInvalidStringArray = [ singleInvalidString ]
  const fullStringArray: string[] = [ 'glue', 'wiry', 'zebra', 'cost', 'dwarf', 'case', 'rock', 'dress' ]
  const fullWhitespaceStringArray: string[] = [ ' glue ', '\rwiry\r', '\nzebra\n', '\tcost\t', ' \tdwarf\t ', ' \r case  ', '  rock', 'dress' ]
  const fullInvalidStringArray: string[] = [ 'glue', 'wiry', 'foo', 'zebra', 'cost' ]

  it("returns an empty array for an empty string", () =>
    expect(decode(emptyString)).toEqual(emptyArray))

  it("returns an empty array for a string that is just whitespace", () =>
    expect(decode(whitespaceString)).toEqual(emptyArray))
  
  it("returns an empty array for an empty string[]", () =>
    expect(decode(emptyStringArray)).toEqual(emptyArray))

  it("returns an empty array for a single value that is empty in a string[]", () =>
    expect( decode(singleEmptyStringArray)).toEqual(emptyArray))

  it("returns an empty array for a single value that is just whitespace in a string[]", () =>
    expect(decode(singleWhitespaceStringArray)).toEqual(emptyArray))

  it("returns an array with the byte for a string with a single word", () =>
    expect(decode(singleString)).toEqual(singleArray))

  it("returns an array with the byte for a string with a single word encased in whitespace", () =>
    expect(decode(singleWhitespaceString)).toEqual(singleArray))

  it("errors when the a string with a single value isn't valid", () =>
    expect(() => decode(singleInvalidString)).toThrowError("Invalid value 'foo' found at index 0"))

  it("returns an array with the byte for a single word in a string[]", () =>
    expect(decode(singleStringArray)).toEqual(singleArray))

  it("returns and array with the byte for a single word encased in whitespace in a string[]", () =>
    expect(decode([singleWhitespaceString])).toEqual(singleArray))

  it("errors when a single value in a string[] isn't valid", () =>
    expect(() => decode(singleInvalidStringArray)).toThrowError("Invalid value 'foo' found at index 0"))


  it("returns a full array of bytes for a full string", () =>
    expect(decode(fullString)).toEqual(fullArray))

  it("returns a full array of bytes for a full string riddled with whitespace", () =>
    expect(decode(fullWhitespaceString)).toEqual(fullArray))

  it("errors when a full string has an invalid value", () =>
    expect(() => decode(fullInvalidString)).toThrowError("Invalid value 'foo' found at index 2"))

  it("returns a full array of bytes for a full string[]", () =>
    expect(decode(fullStringArray)).toEqual(fullArray))

  it("returns a full array of bytes for a full string[] that is full of whitespace", () =>
    expect(decode(fullWhitespaceStringArray)).toEqual(fullArray))

  it("errors when a full array has an invalid value", () =>
    expect(() => decode(fullInvalidStringArray)).toThrowError("Invalid value 'foo' found at index 2"))

})
