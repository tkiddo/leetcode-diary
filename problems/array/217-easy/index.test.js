const { containsDuplicate } = require('./solution')

describe('217. Contains Duplicate', () => {
  it('should return true if the array contains duplicate', () => {
    const nums = [1, 2, 3, 1]
    const result = containsDuplicate(nums)
    expect(result).toBe(true)
  })
  it('should return false if the array does not contain duplicate', () => {
    const nums = [1, 2, 3, 4]
    const result = containsDuplicate(nums)
    expect(result).toBe(false)
  })
  it('should return false if the array is empty', () => {
    const nums = []
    const result = containsDuplicate(nums)
    expect(result).toBe(false)
  })
})
