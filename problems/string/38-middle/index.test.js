const { countAndSay } = require('./solution')

describe.skip('countAndSay', () => {
  it('should return the correct string for n = 1', () => {
    expect(countAndSay(1)).toBe('1')
  })

  it('should return the correct string for n = 2', () => {
    expect(countAndSay(2)).toBe('11')
  })

  it('should return the correct string for n = 3', () => {
    expect(countAndSay(3)).toBe('21')
  })

  it('should return the correct string for n = 4', () => {
    expect(countAndSay(4)).toBe('1211')
  })

  it('should return the correct string for n = 5', () => {
    expect(countAndSay(5)).toBe('111221')
  })

  it('should return the correct string for n = 6', () => {
    expect(countAndSay(6)).toBe('312211')
  })

  it('should return the correct string for n = 7', () => {
    expect(countAndSay(7)).toBe('13112221')
  })

  it('should return the correct string for n = 8', () => {
    expect(countAndSay(8)).toBe('1113213211')
  })

  it('should return the correct string for n = 9', () => {
    expect(countAndSay(9)).toBe('31131211131221')
  })

  it('should return the correct string for n = 10', () => {
    expect(countAndSay(10)).toBe('13211311123113112211')
  })
})
