const { countPrimes } = require('./solution')

describe('countPrimes', () => {
  it('should return the number of prime numbers less than a non-negative number, n', () => {
    expect(countPrimes(10)).toBe(4)
  })
})
