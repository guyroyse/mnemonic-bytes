import { decode } from '$lib/index'

describe("#decode", () => {

  const emptyArray = new Uint8Array()
  const populatedArray = new Uint8Array([ 97, 249, 254, 45 ])

  it.each([
    [ "an empty string", '' ],
    [ "a whitespace string", ' \t\r\n' ],
    [ "an empty string[]", [] ],
    [ "an empty string in a string[]", [''] ],
    [ "a whitespace string in a string[]", [' \t\r\n'] ]
  ])("returns an empty array for %s", (_, input) => expect(decode(input)).toEqual(emptyArray))

  it.each([
    [ "a string", 'glue wiry zebra cost' ],
    [ "a string with mixed case", 'glue WIRY Zebra CoSt' ],
    [ "a string with whitespace", '  glue\nwiry      zebra\tcost\r   ' ],
    [ "a string with mixed case and whitespace", '  glue\nWIRY      Zebra\tCoSt\r   ' ],
    [ "a string[]", [ 'glue', 'wiry', 'zebra', 'cost' ] ],
    [ "a string[] with mixed case", [ 'glue', 'WIRY', 'Zebra', 'CoSt' ] ],
    [ "a string[] with whitespace", [ ' glue ', '\rwiry\r', '\nzebra\n', '\tcost\t' ] ],
    [ "a string[] with mixed case and whitespace", [ ' glue ', '\rWIRY\r', '\nZebra\n', '\tCoSt\t' ] ],
    [ "a string[] with whitespace strings within it", [ ' glue ', '\rwiry\r', ' \t\r\n', '\nzebra\n', '\tcost\t' ] ],
  ])("returns an array for %s", (_, input) =>
    expect(decode(input)).toEqual(populatedArray))

  it.each([
    [ "a string", 'glue wiry foo zebra cost' ],
    [ "a string[]", [ 'glue', 'wiry', 'foo', 'zebra', 'cost' ] ]
  ])("errors when there is an invalid value is in %s", (_, input) =>
    expect(() => decode(input)).toThrowError("Invalid value 'foo' found at index 2"))

})
