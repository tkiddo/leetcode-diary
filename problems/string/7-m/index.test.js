const { reverse } = require('./solution')

describe('reverse', () => {
  it('reverses a number', () => {
    expect(reverse(123)).toEqual(321)
  })
  it('reverses a negative number', () => {
    expect(reverse(-123)).toEqual(-321)
  })
  it('reverses a number with leading zeros', () => {
    expect(reverse(120)).toEqual(21)
  })
  it('reverses a number with trailing zeros', () => {
    expect(reverse(100)).toEqual(1)
  })
})
