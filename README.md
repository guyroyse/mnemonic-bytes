# Mnemonic Bytes

Currently under development. A full README and deployment to NPM is forthcoming. But the general idea is to turn binary data that might be base-64 encoded into into a series of words that human can remember and type. Like this:

```typescript
import { encode, decode } from 'mnemonic-bytes'

const someBytes = new Uint8Array([ 0x01, 0x02, 0x03, 0x04 ])
const words = encode(someBytes)
console.log(words) // Result: [ 'affix', 'agony', 'ajar', 'alike' ]

const bytes = decode([ 'affix', 'agony', 'ajar', 'alike' ])
console.log(bytes) // Result: Uint8Array(4) [ 1, 2, 3, 4 ]
```

Handy, right?
