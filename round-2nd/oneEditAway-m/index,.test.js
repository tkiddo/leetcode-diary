const oneEditAway = require('./solution')

/**
 * 示例 1:

输入:
first = "pale"
second = "ple"
输出: True

示例 2:

输入:
first = "pales"
second = "pal"
输出: False

 */

describe('oneEditAway', () => {
  test('oneEditAway("pale", "ple")', () => {
    expect(oneEditAway('pale', 'ple')).toBe(true)
  })
  test('oneEditAway("pales", "pal")', () => {
    expect(oneEditAway('pales', 'pal')).toBe(false)
  })
  test('oneEditAway("", "")', () => {
    expect(oneEditAway('', '')).toBe(true)
  })
})
