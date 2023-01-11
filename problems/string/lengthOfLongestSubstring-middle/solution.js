const lengthOfLongestSubstring = (s) => {
  const set = new Set()
  let result = 0
  let end = 0
  for (let i = 0; i < s.length; i++) {
    if (i !== 0) {
      set.delete(s[i - 1])
    }
    while (!set.has(s[end]) && end < s.length) {
      set.add(s[end++])
    }
    const len = end - i
    result = Math.max(result, len)
  }
  return result
}

module.exports = {
  lengthOfLongestSubstring,
}
