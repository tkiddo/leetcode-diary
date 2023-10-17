const sumOfMultiples = require('./solution')

/**
 * 示例 1：

输入：n = 7
输出：21
解释：在 [1, 7] 范围内能被 3、5、7 整除的所有整数分别是 3、5、6、7 。数字之和为 21 。
示例 2：

输入：n = 10
输出：40
解释：在 [1, 10] 范围内能被 3、5、7 整除的所有整数分别是 3、5、6、7、9、10 。数字之和为 40 。
示例 3：

输入：n = 9
输出：30
解释：在 [1, 9] 范围内能被 3、5、7 整除的所有整数分别是 3、5、6、7、9 。数字之和为 30 。
 */

describe('round-2nd/sumOfMultiples-e', () => {
  it('1', () => {
    expect(sumOfMultiples(7)).toBe(21)
  })
  it('2', () => {
    expect(sumOfMultiples(10)).toBe(40)
  })
  it('3', () => {
    expect(sumOfMultiples(9)).toBe(30)
  })
})
