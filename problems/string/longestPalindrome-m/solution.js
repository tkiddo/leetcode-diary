/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const isPalindrome = (start, end) => {
    if (start === end) {
      return true
    }
    let l = start,
      r = end
    while (l < r) {
      if (s[l] === s[r]) {
        l++
        r--
      } else {
        return false
      }
    }
    return true
  }
  let result = ''
  for (let i = 0; i < s.length - result.length; i++) {
    let start = i
    for (let j = start; j < s.length - result.length; j++) {
      let end = j
      if (isPalindrome(start, end)) {
        const target = s.slice(start, end + 1)
        if (target.length > result) {
          result = target
        }
      }
    }
  }
  return result
}

module.exports = {
  longestPalindrome,
}
