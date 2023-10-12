const isUnique = require('./solution.js')

describe('isUnique', () => {
  test('Test case 1', () => {
    const astr = 'leetcode'
    const result = isUnique(astr)
    expect(result).toBe(false)
  })
  test('Test case 2', () => {
    const astr = 'abc'
    const result = isUnique(astr)
    expect(result).toBe(true)
  })
  test('Test case 3', () => {
    const astr = 'abcabc'
    const result = isUnique(astr)
    expect(result).toBe(false)
  })
})
