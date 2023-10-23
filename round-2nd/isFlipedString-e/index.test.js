const isFlipedString = require('./solution')

/**
 * 示例1:

 输入：s1 = "waterbottle", s2 = "erbottlewat"
 输出：True
示例2:

 输入：s1 = "aa", s2 = "aba"
 输出：False
 */

describe('isFlipedString', () => {
  test('isFlipedString', () => {
    expect(isFlipedString('waterbottle', 'erbottlewat')).toBe(true)
    expect(isFlipedString('aa', 'aba')).toBe(false)
  })
})
