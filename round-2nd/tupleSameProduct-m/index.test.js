const tupleSameProduct = require('./solution')

/**
 * 示例 1：

输入：nums = [2,3,4,6]
输出：8
解释：存在 8 个满足题意的元组：
(2,6,3,4) , (2,6,4,3) , (6,2,3,4) , (6,2,4,3)
(3,4,2,6) , (4,3,2,6) , (3,4,6,2) , (4,3,6,2)
示例 2：

输入：nums = [1,2,4,5,10]
输出：16
解释：存在 16 个满足题意的元组：
(1,10,2,5) , (1,10,5,2) , (10,1,2,5) , (10,1,5,2)
(2,5,1,10) , (2,5,10,1) , (5,2,1,10) , (5,2,10,1)
(2,10,4,5) , (2,10,5,4) , (10,2,4,5) , (10,2,5,4)
(4,5,2,10) , (4,5,10,2) , (5,4,2,10) , (5,4,10,2)
 */

describe('round-2nd/tupleSameProduct-m', () => {
  it('nums = [2,3,4,6]', () => {
    const nums = [2, 3, 4, 6]
    const result = 8
    expect(tupleSameProduct(nums)).toEqual(result)
  })
  it('nums = [1,2,4,5,10]', () => {
    const nums = [1, 2, 4, 5, 10]
    const result = 16
    expect(tupleSameProduct(nums)).toEqual(result)
  })
})
