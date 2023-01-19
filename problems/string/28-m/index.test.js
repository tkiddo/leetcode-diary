const { strStr } = require('./solution')

describe('strStr', () => {
  it('returns 2 when haystack is "hello" and needle is "ll"', () => {
    expect(strStr('hello', 'll')).toBe(2)
  })
  it('returns -1 when haystack is "aaaaa" and needle is "bba"', () => {
    expect(strStr('aaaaa', 'bba')).toBe(-1)
  })
  it('returns 0 when haystack is "aaa" and needle is "aaa"', () => {
    expect(strStr('aaa', 'aaa')).toBe(0)
  })
  it('returns 4 when haystack is "mississippi" and needle is "issip"', () => {
    expect(strStr('mississippi', 'issip')).toBe(4)
  })
})
