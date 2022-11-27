const { myAtoi } = require('./solution')

describe('myAtoi', () => {
  it('should return 42', () => {
    expect(myAtoi('42')).toBe(42)
  })
  it('should return -42', () => {
    expect(myAtoi('   -42')).toBe(-42)
  })
  it('should return 4193', () => {
    expect(myAtoi('4193 with words')).toBe(4193)
  })
  it('should return 0', () => {
    expect(myAtoi('words and 987')).toBe(0)
  })
  it('should return -2147483648', () => {
    expect(myAtoi('-91283472332')).toBe(-2147483648)
  })
  it('should return 0', () => {
    expect(myAtoi('+-2')).toBe(0)
  })
  it('should return 0', () => {
    expect(myAtoi('3.14159')).toBe(3)
  })
  it('should return 0', () => {
    expect(myAtoi('')).toBe(0)
  })
  it('should return 0', () => {
    expect(myAtoi(' ')).toBe(0)
  })
})
