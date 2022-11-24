const { isPalindrome } = require('./solution')

describe('isPalindrome', () => {
  it('should return true if the string is a palindrome', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true)
    expect(isPalindrome('race a car')).toBe(false)
    expect(isPalindrome('')).toBe(true)
    expect(isPalindrome('a')).toBe(true)
    expect(isPalindrome('aa')).toBe(true)
    expect(isPalindrome('ab')).toBe(false)
    expect(isPalindrome('aba')).toBe(true)
    expect(isPalindrome('abba')).toBe(true)
  })
})
