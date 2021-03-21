// returns a correct modulo
export function getMod(i, j) {
  return ((i % j) + j) % j
}

// object, index
function getAttrPiece(obj) {
  let str = ''
  // check if different from 0 or in the top 5
  if (obj.attr != 0 || ['tp', 'ini', 'kb', 'rb', 's'].includes(obj.short)) {
    let short
    let val = obj.attr
    // check if emoji
    if (obj.emoji) {
      short = obj.emoji
    } else if (obj.bool) {
      short = obj.long
      val = ''
    } else {
      short = obj.long
    }
    str = `${short} ${val} / `
  } else {
  }
  return str
}

