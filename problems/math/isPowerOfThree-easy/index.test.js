const { isPowerOfThree } = require('./solution')

describe('isPowerOfThree', () => {
  it('returns true if n is a power of three', () => {
    expect(isPowerOfThree(27)).toBe(true)
    expect(isPowerOfThree(9)).toBe(true)
    expect(isPowerOfThree(3)).toBe(true)
    expect(isPowerOfThree(1)).toBe(true)
  })

  it('returns false if n is not a power of three', () => {
    expect(isPowerOfThree(0)).toBe(false)
    expect(isPowerOfThree(45)).toBe(false)
    expect(isPowerOfThree(999)).toBe(false)
  })
})
