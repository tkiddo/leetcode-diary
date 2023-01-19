const {longestPalindrome} = require('./solution')

test('longestPalindrome', () => {
  expect(longestPalindrome('babad')).toBe('bab')
  expect(longestPalindrome('cbbd')).toBe('bb')
  expect(longestPalindrome('a')).toBe('a')
  expect(longestPalindrome('ac')).toBe('a')
})