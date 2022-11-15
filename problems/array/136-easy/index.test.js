const { singleNumber } = require('./solution')

describe('singleNumber', () => {
  it('should return the only number that appears once', () => {
    const nums = [2, 2, 1]
    const result = singleNumber(nums)
    expect(result).toBe(1)
  })
})
