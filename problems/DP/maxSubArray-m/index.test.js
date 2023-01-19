const { maxSubArray } = require('./solution')

describe('maxSubArray', () => {
  it('should return the maximum subarray', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6)
  })
})
