const { isAnagram } = require('./solution')

describe('isAnagram', () => {
  it('should return true if two strings are anagrams', () => {
    expect(isAnagram('anagram', 'nagaram')).toBe(true)
  })
  it('should return false if two strings are not anagrams', () => {
    expect(isAnagram('rat', 'car')).toBe(false)
  })
})
