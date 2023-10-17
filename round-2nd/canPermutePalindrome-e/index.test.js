const canPermutePalindrome = require('./solution')

/**
 * 示例1：

输入："tactcoa"
输出：true（排列有"tacocat"、"atcocta"，等等）
 */

describe('canPermutePalindrome', () => {
  test('canPermutePalindrome("tactcoa") to equal true', () => {
    expect(canPermutePalindrome('tactcoa')).toBe(true)
  })
})
