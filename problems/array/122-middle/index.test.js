const { maxProfit } = require('./solution')

describe('maxProfit', () => {
  it('should return 0 if there is no profit', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0)
  })

  it('should return the maximum profit', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(7)
    expect(maxProfit([1, 2, 3, 4, 5])).toBe(4)
  })
})
