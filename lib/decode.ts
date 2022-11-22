import { byteForWord } from "./words"

export function decode(data: string) : Uint8Array
export function decode(data: string[]) : Uint8Array
export function decode(data: string | string[]) : Uint8Array {

  const strings = Array.isArray(data) ? data : data.split(/\s/)

  const bytes = strings
    .map(string => string.trim())
    .filter(string => string !== '')
    .map((string, index) => {
      const byte = byteForWord(string)
      if (byte >= 0) return byte
      throw Error(`Invalid value '${string}' found at index ${index}`)
  })

  return new Uint8Array(bytes)
}
