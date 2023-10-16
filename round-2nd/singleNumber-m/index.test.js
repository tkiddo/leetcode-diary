const singleNumber = require('./solution')

/**
 * 示例 1：

输入：nums = [1,2,1,3,2,5]
输出：[3,5]
解释：[5, 3] 也是有效的答案。
示例 2：

输入：nums = [-1,0]
输出：[-1,0]
示例 3：

输入：nums = [0,1]
输出：[1,0]
 */

describe('round-2nd/singleNumber-m', () => {
  it('nums = [1,2,1,3,2,5]', () => {
    expect(singleNumber([1, 2, 1, 3, 2, 5])).toEqual([3, 5])
  })
  it('nums = [-1,0]', () => {
    expect(singleNumber([-1, 0])).toEqual([-1, 0])
  })
  it('nums = [0,1]', () => {
    expect(singleNumber([0, 1])).toEqual([0, 1])
  })
})
