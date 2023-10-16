const CheckPermutation = require('./solution')

/**
 * 示例 1：

输入: s1 = "abc", s2 = "bca"
输出: true 
示例 2：

输入: s1 = "abc", s2 = "bad"
输出: false
 */

test('CheckPermutation', () => {
  expect(CheckPermutation('abc', 'bca')).toBe(true)
  expect(CheckPermutation('abc', 'bad')).toBe(false)
})
