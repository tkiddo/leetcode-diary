/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
  const count = new Map()
  for (let i = 0; i < s.length; i++) {
    const charCount = count.get(s[i])
    if (charCount) {
      count.set(s[i], charCount + 1)
    } else {
      count.set(s[i], 1)
    }
  }
  let oddCount = 0
  for (let value of count.values()) {
    if (value % 2 !== 0) {
      oddCount++
    }
  }
  return oddCount <= 1
}

module.exports = canPermutePalindrome
