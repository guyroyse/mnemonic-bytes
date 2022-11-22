import { byteForWord } from "$lib/words"

type ByteAndWord = [ number, string ]

describe("#byteForWord", () => {
  it.each(bytesAndWords)("returns the byte %s for the word '%s'", (byte, word) => {
    expect(byteForWord(word)).toBe(byte)
  })

  it("returns -1 for unknown words", () => {
    expect(byteForWord('foo')).toBe(-1)
  })
})

const bytesAndWords: ByteAndWord[] = [
  [ 0, 'acid' ], [ 1, 'affix' ], [ 2, 'agony' ], [ 3, 'ajar' ], [ 4, 'alike' ], [ 5, 'alone' ], [ 6, 'angel' ], [ 7, 'april' ],
  [ 8, 'argue' ], [ 9, 'aroma' ], [ 10, 'ashes' ], [ 11, 'avert' ], [ 12, 'axis' ], [ 13, 'baked' ], [ 14, 'barn' ], [ 15, 'bath' ],
  [ 16, 'blast' ], [ 17, 'blimp' ], [ 18, 'blot' ], [ 19, 'boat' ], [ 20, 'booth' ], [ 21, 'boxer' ], [ 22, 'brim' ], [ 23, 'broil' ],
  [ 24, 'buck' ], [ 25, 'bully' ], [ 26, 'bust' ], [ 27, 'cadet' ], [ 28, 'canal' ], [ 29, 'card' ], [ 30, 'case' ], [ 31, 'chair' ],
  [ 32, 'cheek' ], [ 33, 'chew' ], [ 34, 'chomp' ], [ 35, 'chunk' ], [ 36, 'city' ], [ 37, 'clamp' ], [ 38, 'claw' ], [ 39, 'cleft' ],
  [ 40, 'clip' ], [ 41, 'cloud' ], [ 42, 'cod' ], [ 43, 'colt' ], [ 44, 'cone' ], [ 45, 'cost' ], [ 46, 'cozy' ], [ 47, 'crate' ],
  [ 48, 'crepe' ], [ 49, 'crook' ], [ 50, 'crumb' ], [ 51, 'cupid' ], [ 52, 'curve' ], [ 53, 'dab' ], [ 54, 'dance' ], [ 55, 'data' ],
  [ 56, 'dean' ], [ 57, 'decal' ], [ 58, 'deed' ], [ 59, 'depth' ], [ 60, 'dice' ], [ 61, 'diner' ], [ 62, 'ditch' ], [ 63, 'doing' ],
  [ 64, 'dose' ], [ 65, 'doze' ], [ 66, 'dress' ], [ 67, 'drone' ], [ 68, 'dry' ], [ 69, 'duke' ], [ 70, 'dwarf' ], [ 71, 'easel' ],
  [ 72, 'ebony' ], [ 73, 'eject' ], [ 74, 'elm' ], [ 75, 'emit' ], [ 76, 'envoy' ], [ 77, 'essay' ], [ 78, 'evil' ], [ 79, 'faced' ],
  [ 80, 'fancy' ], [ 81, 'femur' ], [ 82, 'fetch' ], [ 83, 'film' ], [ 84, 'five' ], [ 85, 'flask' ], [ 86, 'flip' ], [ 87, 'floss' ],
  [ 88, 'foil' ], [ 89, 'found' ], [ 90, 'fray' ], [ 91, 'from' ], [ 92, 'froze' ], [ 93, 'game' ], [ 94, 'gecko' ], [ 95, 'gig' ],
  [ 96, 'glass' ], [ 97, 'glue' ], [ 98, 'good' ], [ 99, 'grab' ], [ 100, 'grasp' ], [ 101, 'green' ], [ 102, 'grill' ], [ 103, 'growl' ],
  [ 104, 'gulp' ], [ 105, 'guy' ], [ 106, 'happy' ], [ 107, 'hate' ], [ 108, 'heat' ], [ 109, 'herbs' ], [ 110, 'hull' ], [ 111, 'hunk' ],
  [ 112, 'hut' ], [ 113, 'igloo' ], [ 114, 'issue' ], [ 115, 'jam' ], [ 116, 'jet' ], [ 117, 'jolt' ], [ 118, 'juicy' ], [ 119, 'juror' ],
  [ 120, 'kick' ], [ 121, 'kiwi' ], [ 122, 'ladle' ], [ 123, 'land' ], [ 124, 'last' ], [ 125, 'legal' ], [ 126, 'level' ], [ 127, 'lilac' ],
  [ 128, 'lint' ], [ 129, 'liver' ], [ 130, 'lure' ], [ 131, 'maker' ], [ 132, 'many' ], [ 133, 'mash' ], [ 134, 'mocha' ], [ 135, 'mop' ],
  [ 136, 'mount' ], [ 137, 'movie' ], [ 138, 'mule' ], [ 139, 'muse' ], [ 140, 'nag' ], [ 141, 'navy' ], [ 142, 'nest' ], [ 143, 'nutty' ],
  [ 144, 'oil' ], [ 145, 'only' ], [ 146, 'opt' ], [ 147, 'oval' ], [ 148, 'pants' ], [ 149, 'pasta' ], [ 150, 'pecan' ], [ 151, 'perm' ],
  [ 152, 'photo' ], [ 153, 'plot' ], [ 154, 'poach' ], [ 155, 'point' ], [ 156, 'polka' ], [ 157, 'pork' ], [ 158, 'power' ], [ 159, 'prism' ],
  [ 160, 'props' ], [ 161, 'pull' ], [ 162, 'punk' ], [ 163, 'push' ], [ 164, 'quiet' ], [ 165, 'quote' ], [ 166, 'radio' ], [ 167, 'rake' ],
  [ 168, 'rank' ], [ 169, 'react' ], [ 170, 'relay' ], [ 171, 'reply' ], [ 172, 'rich' ], [ 173, 'riot' ], [ 174, 'rival' ], [ 175, 'rock' ],
  [ 176, 'rover' ], [ 177, 'rule' ], [ 178, 'sadly' ], [ 179, 'salon' ], [ 180, 'santa' ], [ 181, 'sax' ], [ 182, 'scare' ], [ 183, 'scoop' ],
  [ 184, 'scout' ], [ 185, 'scuff' ], [ 186, 'sepia' ], [ 187, 'shade' ], [ 188, 'shape' ], [ 189, 'sheet' ], [ 190, 'ship' ], [ 191, 'shout' ],
  [ 192, 'shrug' ], [ 193, 'sift' ], [ 194, 'siren' ], [ 195, 'skid' ], [ 196, 'skit' ], [ 197, 'slam' ], [ 198, 'sled' ], [ 199, 'slice' ],
  [ 200, 'slit' ], [ 201, 'slurp' ], [ 202, 'smile' ], [ 203, 'snare' ], [ 204, 'snore' ], [ 205, 'snuff' ], [ 206, 'spew' ], [ 207, 'spoke' ],
  [ 208, 'spot' ], [ 209, 'squad' ], [ 210, 'stage' ], [ 211, 'stank' ], [ 212, 'stays' ], [ 213, 'stew' ], [ 214, 'stole' ], [ 215, 'stoop' ],
  [ 216, 'straw' ], [ 217, 'stuff' ], [ 218, 'sugar' ], [ 219, 'swan' ], [ 220, 'sweep' ], [ 221, 'swipe' ], [ 222, 'tacky' ], [ 223, 'talon' ],
  [ 224, 'taunt' ], [ 225, 'thigh' ], [ 226, 'those' ], [ 227, 'thus' ], [ 228, 'tile' ], [ 229, 'track' ], [ 230, 'trash' ], [ 231, 'trend' ],
  [ 232, 'trout' ], [ 233, 'try' ], [ 234, 'tusk' ], [ 235, 'tweet' ], [ 236, 'twist' ], [ 237, 'union' ], [ 238, 'urban' ], [ 239, 'value' ],
  [ 240, 'vest' ], [ 241, 'viral' ], [ 242, 'vocal' ], [ 243, 'vowel' ], [ 244, 'wagon' ], [ 245, 'watch' ], [ 246, 'whole' ], [ 247, 'width' ],
  [ 248, 'wind' ], [ 249, 'wiry' ], [ 250, 'wolf' ], [ 251, 'work' ], [ 252, 'wreck' ], [ 253, 'yard' ], [ 254, 'zebra' ], [ 255, 'zoom' ]
]
