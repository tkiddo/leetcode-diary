/**
 * @param {string} S
 * @return {string}
 */
var compressString = function (S) {
  let current = '',
    count = 0,
    result = ''
  for (let i = 0; i < S.length; i++) {
    if (current === S[i]) {
      count++
    } else {
      if (current) {
        result = result + current + count
      }
      current = S[i]
      count = 1
    }
  }
  if (current) {
    result = result + current + count
  }
  return result.length >= S.length ? S : result
}

module.exports = compressString
