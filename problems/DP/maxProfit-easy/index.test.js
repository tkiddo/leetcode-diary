const { maxProfit } = require('./solution')

describe('maxProfit', () => {
  it('should return the max profit', () => {
    const prices = [7, 1, 5, 3, 6, 4]
    const expected = 5
    const actual = maxProfit(prices)
    expect(actual).toEqual(expected)
  })
  it('should return the max profit', () => {
    const prices = [7, 6, 4, 3, 1]
    const expected = 0
    const actual = maxProfit(prices)
    expect(actual).toEqual(expected)
  })
})
