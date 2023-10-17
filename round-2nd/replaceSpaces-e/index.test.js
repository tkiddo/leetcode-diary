const replaceSpaces = require('./solution')

/**
 * 示例 1：

输入："Mr John Smith    ", 13
输出："Mr%20John%20Smith"
示例 2：

输入："               ", 5
输出："%20%20%20%20%20"
 */

describe('replaceSpaces', () => {
  test('replaceSpaces("Mr John Smith    ", 13) to equal "Mr%20John%20Smith"', () => {
    expect(replaceSpaces('Mr John Smith    ', 13)).toBe('Mr%20John%20Smith')
  })
  test('replaceSpaces("               ", 5) to equal "%20%20%20%20%20"', () => {
    expect(replaceSpaces('               ', 5)).toBe('%20%20%20%20%20')
  })
})
