const { twoSum2, twoSum } = require('./solution')

describe('twoSum', () => {
  it('returns the indices of the two numbers that add up to the target', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
    expect(twoSum([3, 3], 6)).toEqual([0, 1])
  })
})

describe('twoSum2', () => {
  it('returns the indices of the two numbers that add up to the target', () => {
    expect(twoSum2([2, 7, 11, 15], 9)).toEqual([0, 1])
    expect(twoSum2([3, 2, 4], 6)).toEqual([1, 2])
    expect(twoSum2([3, 3], 6)).toEqual([0, 1])
  })
})
