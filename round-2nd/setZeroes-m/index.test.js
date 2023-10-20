const setZeroes = require('./solution')

/**
 * 示例 1：

输入：
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
输出：
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
示例 2：

输入：
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
输出：
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
 */

describe('round-2nd/setZeroes-m', () => {
  it('[[1,1,1],[1,0,1],[1,1,1]]', () => {
    const input = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ]
    const output = [
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1],
    ]
    setZeroes(input)
    expect(input).toEqual(output)
  })
  it('[[0,1,2,0],[3,4,5,2],[1,3,1,5]]', () => {
    const input = [
      [0, 1, 2, 0],
      [3, 4, 5, 2],
      [1, 3, 1, 5],
    ]
    const output = [
      [0, 0, 0, 0],
      [0, 4, 5, 0],
      [0, 3, 1, 0],
    ]
    setZeroes(input)
    expect(input).toEqual(output)
  })
})
