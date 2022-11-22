const words: string[] = [
  'acid', 'affix', 'agony', 'ajar', 'alike', 'alone', 'angel', 'april', 'argue', 'aroma', 'ashes', 'avert', 'axis', 'baked', 'barn', 'bath',
  'blast', 'blimp', 'blot', 'boat', 'booth', 'boxer', 'brim', 'broil', 'buck', 'bully', 'bust', 'cadet', 'canal', 'card', 'case', 'chair',
  'cheek', 'chew', 'chomp', 'chunk', 'city', 'clamp', 'claw', 'cleft', 'clip', 'cloud', 'cod', 'colt', 'cone', 'cost', 'cozy', 'crate',
  'crepe', 'crook', 'crumb', 'cupid', 'curve', 'dab', 'dance', 'data', 'dean', 'decal', 'deed', 'depth', 'dice', 'diner', 'ditch', 'doing',
  'dose', 'doze', 'dress', 'drone', 'dry', 'duke', 'dwarf', 'easel', 'ebony', 'eject', 'elm', 'emit', 'envoy', 'essay', 'evil', 'faced',
  'fancy', 'femur', 'fetch', 'film', 'five', 'flask', 'flip', 'floss', 'foil', 'found', 'fray', 'from', 'froze', 'game', 'gecko', 'gig',
  'glass', 'glue', 'good', 'grab', 'grasp', 'green', 'grill', 'growl', 'gulp', 'guy', 'happy', 'hate', 'heat', 'herbs', 'hull', 'hunk',
  'hut', 'igloo', 'issue', 'jam', 'jet', 'jolt', 'juicy', 'juror', 'kick', 'kiwi', 'ladle', 'land', 'last', 'legal', 'level', 'lilac',
  'lint', 'liver', 'lure', 'maker', 'many', 'mash', 'mocha', 'mop', 'mount', 'movie', 'mule', 'muse', 'nag', 'navy', 'nest', 'nutty',
  'oil', 'only', 'opt', 'oval', 'pants', 'pasta', 'pecan', 'perm', 'photo', 'plot', 'poach', 'point', 'polka', 'pork', 'power', 'prism',
  'props', 'pull', 'punk', 'push', 'quiet', 'quote', 'radio', 'rake', 'rank', 'react', 'relay', 'reply', 'rich', 'riot', 'rival', 'rock',
  'rover', 'rule', 'sadly', 'salon', 'santa', 'sax', 'scare', 'scoop', 'scout', 'scuff', 'sepia', 'shade', 'shape', 'sheet', 'ship', 'shout',
  'shrug', 'sift', 'siren', 'skid', 'skit', 'slam', 'sled', 'slice', 'slit', 'slurp', 'smile', 'snare', 'snore', 'snuff', 'spew', 'spoke',
  'spot', 'squad', 'stage', 'stank', 'stays', 'stew', 'stole', 'stoop', 'straw', 'stuff', 'sugar', 'swan', 'sweep', 'swipe', 'tacky', 'talon',
  'taunt', 'thigh', 'those', 'thus', 'tile', 'track', 'trash', 'trend', 'trout', 'try', 'tusk', 'tweet', 'twist', 'union', 'urban', 'value',
  'vest', 'viral', 'vocal', 'vowel', 'wagon', 'watch', 'whole', 'width', 'wind', 'wiry', 'wolf', 'work', 'wreck', 'yard', 'zebra', 'zoom'
]

export function byteForWord(word: string) {
  return words.indexOf(word)
}

export function wordForByte(byte: number) {
  return words[byte]
}