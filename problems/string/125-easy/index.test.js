const { isPalindrome, isPalindrome2 } = require('./solution')

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

describe('isPalindrome2', () => {
  it('should return true if the string is a palindrome', () => {
    expect(isPalindrome2('A man, a plan, a canal: Panama')).toBe(true)
    expect(isPalindrome2('race a car')).toBe(false)
    expect(isPalindrome2('')).toBe(true)
    expect(isPalindrome2('a')).toBe(true)
    expect(isPalindrome2('aa')).toBe(true)
    expect(isPalindrome2('ab')).toBe(false)
    expect(isPalindrome2('aba')).toBe(true)
    expect(isPalindrome2('abba')).toBe(true)
  })
})
