const { reverseString } = require('./solution')

describe('reverseString', () => {
  it('reverses a string', () => {
    const s = ['h', 'e', 'l', 'l', 'o']
    reverseString(s)
    expect(s).toEqual(['o', 'l', 'l', 'e', 'h'])
  })
})
