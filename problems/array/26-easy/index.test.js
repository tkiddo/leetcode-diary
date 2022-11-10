const { removeDuplicates } = require('./solution')

describe('removeDuplicates', () => {
  test('should remove duplicates from a sorted array', () => {
    const nums = [1, 1, 2]
    const length = removeDuplicates(nums)
    expect(length).toEqual(2)
    expect(nums.slice(0, length)).toEqual([1, 2])
  })

  test('should remove duplicates from a sorted array', () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
    const length = removeDuplicates(nums)
    expect(length).toEqual(5)
    expect(nums.slice(0, length)).toEqual([0, 1, 2, 3, 4])
  })
})
