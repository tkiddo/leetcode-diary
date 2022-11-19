const { moveZeroes, moveZeroes2 } = require('./solution')

describe('moveZeroes', () => {
  it('moves zeroes to the end', () => {
    const nums = [0, 1, 0, 3, 12]
    moveZeroes(nums)
    expect(nums).toEqual([1, 3, 12, 0, 0])
  })
})

describe('moveZeroes2', () => {
  it('moves zeroes to the end', () => {
    const nums = [0, 1, 0, 3, 12]
    moveZeroes2(nums)
    expect(nums).toEqual([1, 3, 12, 0, 0])
  })
})
