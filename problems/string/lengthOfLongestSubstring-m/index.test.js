const { lengthOfLongestSubstring } = require('./solution')

test('lengthOfLongestSubstring', () => {
  expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3)
  expect(lengthOfLongestSubstring('bbbbb')).toEqual(1)
  expect(lengthOfLongestSubstring('pwwkew')).toEqual(3)
  expect(lengthOfLongestSubstring('')).toEqual(0)
})
