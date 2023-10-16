const singleNumber = require('./solution')

/**
 * 输入：nums = [2,2,3,2]
输出：3
示例 2：

输入：nums = [0,1,0,1,0,1,99]
输出：99
 */

test('singleNumber', () => {
  expect(singleNumber([2, 2, 3, 2])).toBe(3)
  expect(singleNumber([0, 1, 0, 1, 0, 1, 99])).toBe(99)
})
