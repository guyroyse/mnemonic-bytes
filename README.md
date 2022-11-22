# Mnemonic Bytes

Mnemonic Bytes encode and decode binary data to and from mnemonic words using a base-256 encoding scheme. This is great for turning things like UUIDs, encryption keys, and wallet addresses into something that humans can actually remember and type.

To install, do the `npm` thing:

```
$ npm install mnemonic-bytes
```

To use it, call `.encode` and `.decode`:

```typescript
import { encode, decode } from 'mnemonic-bytes'

const someBytes = new Uint8Array([ 0x01, 0x02, 0x03, 0x04 ])
const mnemonics = encode(someBytes)
console.log(mnemonics) // Result: [ 'affix', 'agony', 'ajar', 'alike' ]

const bytes = decode([ 'affix', 'agony', 'ajar', 'alike' ])
console.log(bytes) // Result: Uint8Array(4) [ 1, 2, 3, 4 ]
```

## Encoding

The `.encode` function takes either an [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) or a JavaScript object that has a `.buffer` property that contains an ArrayBuffer—like a [DataView](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) or a [TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray). It returns a `string[]`.

```typescript
const bytes = new Uint8Array([ 0x01, 0x02, 0x03, 0x04 ])
const buffer = bytes.buffer

let mnemonics

mnemonics = encode(bytes)
console.log(mnemonics) // Result: [ 'affix', 'agony', 'ajar', 'alike' ]

mnemonics = encode(buffer)
console.log(mnemonics) // Result: [ 'affix', 'agony', 'ajar', 'alike' ]
```

## Decoding

The `.decode` function takes either a `string` containing whitespace-delimited mnemonics or a `string[]` containing mnemonics. It returns a [Uint8Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array).

```typescript
let bytes

bytes = decode('affix agony ajar alike')
console.log(bytes) // Result: Uint8Array(4) [ 1, 2, 3, 4 ]

bytes = decode('affix\tagony\tajar\talike')
console.log(bytes) // Result: Uint8Array(4) [ 1, 2, 3, 4 ]

bytes = decode([ 'affix', 'agony', 'ajar', 'alike' ])
console.log(bytes) // Result: Uint8Array(4) [ 1, 2, 3, 4 ]
```

It ignores empty strings:

```typescript
bytes = decode('')
console.log(bytes) // Result: Uint8Array(0) []

bytes = decode('\t')
console.log(bytes) // Result: Uint8Array(0) []

bytes = decode([ '', 'affix', 'agony', 'ajar', 'alike' ])
console.log(bytes) // Result: Uint8Array(4) [ 1, 2, 3, 4 ]

bytes = decode([ '\t', 'affix', 'agony', 'ajar', 'alike' ])
console.log(bytes) // Result: Uint8Array(4) [ 1, 2, 3, 4 ]
```

It ignores casing in the mnemonics:

```typescript
bytes = decode('affix Agony AJAR AlIkE')
console.log(bytes) // Result: Uint8Array(4) [ 1, 2, 3, 4 ]

bytes = decode([ 'affix', 'Agony', 'AJAR', 'AlIkE' ])
console.log(bytes) // Result: Uint8Array(4) [ 1, 2, 3, 4 ]
```

It throws an error if an invalid word is encountered:

```typescript
try {
  bytes = decode('foo bar baz')
} catch (err) {
  console.log(err) // Result: Error: Invalid value 'foo' found at index 0
}
```

## Contributing

If you find a bug, typo, or some third thing, feel free to send me a pull request.
