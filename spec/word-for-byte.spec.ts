import { wordForByte } from "$lib/words"

type WordAndByte = [ string, number ]

describe("#wordForByte", () => {
  it.each(wordsAndBytes)("returns the word '%s' for the byte '%s'", (word, byte) => {
    expect(wordForByte(byte)).toBe(word)
  })

  it("returns undefined for out of range bytes", () => {
    expect(wordForByte(-1)).toBeUndefined()
    expect(wordForByte(256)).toBeUndefined()
  })
})

const wordsAndBytes: WordAndByte[] = [
  [ 'acid', 0 ], [ 'affix', 1 ], [ 'agony', 2 ], [ 'ajar', 3 ], [ 'alike', 4 ], [ 'alone', 5 ], [ 'angel', 6 ], [ 'april', 7 ],
  [ 'argue', 8 ], [ 'aroma', 9 ], [ 'ashes', 10 ], [ 'avert', 11 ], [ 'axis', 12 ], [ 'baked', 13 ], [ 'barn', 14 ], [ 'bath', 15 ],
  [ 'blast', 16 ], [ 'blimp', 17 ], [ 'blot', 18 ], [ 'boat', 19 ], [ 'booth', 20 ], [ 'boxer', 21 ], [ 'brim', 22 ], [ 'broil', 23 ],
  [ 'buck', 24 ], [ 'bully', 25 ], [ 'bust', 26 ], [ 'cadet', 27 ], [ 'canal', 28 ], [ 'card', 29 ], [ 'case', 30 ], [ 'chair', 31 ],
  [ 'cheek', 32 ], [ 'chew', 33 ], [ 'chomp', 34 ], [ 'chunk', 35 ], [ 'city', 36 ], [ 'clamp', 37 ], [ 'claw', 38 ], [ 'cleft', 39 ],
  [ 'clip', 40 ], [ 'cloud', 41 ], [ 'cod', 42 ], [ 'colt', 43 ], [ 'cone', 44 ], [ 'cost', 45 ], [ 'cozy', 46 ], [ 'crate', 47 ],
  [ 'crepe', 48 ], [ 'crook', 49 ], [ 'crumb', 50 ], [ 'cupid', 51 ], [ 'curve', 52 ], [ 'dab', 53 ], [ 'dance', 54 ], [ 'data', 55 ],
  [ 'dean', 56 ], [ 'decal', 57 ], [ 'deed', 58 ], [ 'depth', 59 ], [ 'dice', 60 ], [ 'diner', 61 ], [ 'ditch', 62 ], [ 'doing', 63 ],
  [ 'dose', 64 ], [ 'doze', 65 ], [ 'dress', 66 ], [ 'drone', 67 ], [ 'dry', 68 ], [ 'duke', 69 ], [ 'dwarf', 70 ], [ 'easel', 71 ],
  [ 'ebony', 72 ], [ 'eject', 73 ], [ 'elm', 74 ], [ 'emit', 75 ], [ 'envoy', 76 ], [ 'essay', 77 ], [ 'evil', 78 ], [ 'faced', 79 ],
  [ 'fancy', 80 ], [ 'femur', 81 ], [ 'fetch', 82 ], [ 'film', 83 ], [ 'five', 84 ], [ 'flask', 85 ], [ 'flip', 86 ], [ 'floss', 87 ],
  [ 'foil', 88 ], [ 'found', 89 ], [ 'fray', 90 ], [ 'from', 91 ], [ 'froze', 92 ], [ 'game', 93 ], [ 'gecko', 94 ], [ 'gig', 95 ],
  [ 'glass', 96 ], [ 'glue', 97 ], [ 'good', 98 ], [ 'grab', 99 ], [ 'grasp', 100 ], [ 'green', 101 ], [ 'grill', 102 ], [ 'growl', 103 ],
  [ 'gulp', 104 ], [ 'guy', 105 ], [ 'happy', 106 ], [ 'hate', 107 ], [ 'heat', 108 ], [ 'herbs', 109 ], [ 'hull', 110 ], [ 'hunk', 111 ],
  [ 'hut', 112 ], [ 'igloo', 113 ], [ 'issue', 114 ], [ 'jam', 115 ], [ 'jet', 116 ], [ 'jolt', 117 ], [ 'juicy', 118 ], [ 'juror', 119 ],
  [ 'kick', 120 ], [ 'kiwi', 121 ], [ 'ladle', 122 ], [ 'land', 123 ], [ 'last', 124 ], [ 'legal', 125 ], [ 'level', 126 ], [ 'lilac', 127 ],
  [ 'lint', 128 ], [ 'liver', 129 ], [ 'lure', 130 ], [ 'maker', 131 ], [ 'many', 132 ], [ 'mash', 133 ], [ 'mocha', 134 ], [ 'mop', 135 ],
  [ 'mount', 136 ], [ 'movie', 137 ], [ 'mule', 138 ], [ 'muse', 139 ], [ 'nag', 140 ], [ 'navy', 141 ], [ 'nest', 142 ], [ 'nutty', 143 ],
  [ 'oil', 144 ], [ 'only', 145 ], [ 'opt', 146 ], [ 'oval', 147 ], [ 'pants', 148 ], [ 'pasta', 149 ], [ 'pecan', 150 ], [ 'perm', 151 ],
  [ 'photo', 152 ], [ 'plot', 153 ], [ 'poach', 154 ], [ 'point', 155 ], [ 'polka', 156 ], [ 'pork', 157 ], [ 'power', 158 ], [ 'prism', 159 ],
  [ 'props', 160 ], [ 'pull', 161 ], [ 'punk', 162 ], [ 'push', 163 ], [ 'quiet', 164 ], [ 'quote', 165 ], [ 'radio', 166 ], [ 'rake', 167 ],
  [ 'rank', 168 ], [ 'react', 169 ], [ 'relay', 170 ], [ 'reply', 171 ], [ 'rich', 172 ], [ 'riot', 173 ], [ 'rival', 174 ], [ 'rock', 175 ],
  [ 'rover', 176 ], [ 'rule', 177 ], [ 'sadly', 178 ], [ 'salon', 179 ], [ 'santa', 180 ], [ 'sax', 181 ], [ 'scare', 182 ], [ 'scoop', 183 ],
  [ 'scout', 184 ], [ 'scuff', 185 ], [ 'sepia', 186 ], [ 'shade', 187 ], [ 'shape', 188 ], [ 'sheet', 189 ], [ 'ship', 190 ], [ 'shout', 191 ],
  [ 'shrug', 192 ], [ 'sift', 193 ], [ 'siren', 194 ], [ 'skid', 195 ], [ 'skit', 196 ], [ 'slam', 197 ], [ 'sled', 198 ], [ 'slice', 199 ],
  [ 'slit', 200 ], [ 'slurp', 201 ], [ 'smile', 202 ], [ 'snare', 203 ], [ 'snore', 204 ], [ 'snuff', 205 ], [ 'spew', 206 ], [ 'spoke', 207 ],
  [ 'spot', 208 ], [ 'squad', 209 ], [ 'stage', 210 ], [ 'stank', 211 ], [ 'stays', 212 ], [ 'stew', 213 ], [ 'stole', 214 ], [ 'stoop', 215 ],
  [ 'straw', 216 ], [ 'stuff', 217 ], [ 'sugar', 218 ], [ 'swan', 219 ], [ 'sweep', 220 ], [ 'swipe', 221 ], [ 'tacky', 222 ], [ 'talon', 223 ],
  [ 'taunt', 224 ], [ 'thigh', 225 ], [ 'those', 226 ], [ 'thus', 227 ], [ 'tile', 228 ], [ 'track', 229 ], [ 'trash', 230 ], [ 'trend', 231 ],
  [ 'trout', 232 ], [ 'try', 233 ], [ 'tusk', 234 ], [ 'tweet', 235 ], [ 'twist', 236 ], [ 'union', 237 ], [ 'urban', 238 ], [ 'value', 239 ],
  [ 'vest', 240 ], [ 'viral', 241 ], [ 'vocal', 242 ], [ 'vowel', 243 ], [ 'wagon', 244 ], [ 'watch', 245 ], [ 'whole', 246 ], [ 'width', 247 ],
  [ 'wind', 248 ], [ 'wiry', 249 ], [ 'wolf', 250 ], [ 'work', 251 ], [ 'wreck', 252 ], [ 'yard', 253 ], [ 'zebra', 254 ], [ 'zoom',  255 ]
]
