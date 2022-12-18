const { fizzBuzz } = require('./solution')

describe('fizzBuzz', () => {
  it('returns an array of strings', () => {
    const result = fizzBuzz(15)
    expect(result).toBeInstanceOf(Array)
    expect(result.every((item) => typeof item === 'string')).toBe(true)
  })
  it('returns the correct values', () => {
    const result = fizzBuzz(15)
    expect(result).toEqual([
      '1',
      '2',
      'Fizz',
      '4',
      'Buzz',
      'Fizz',
      '7',
      '8',
      'Fizz',
      'Buzz',
      '11',
      'Fizz',
      '13',
      '14',
      'FizzBuzz'
    ])
  })
})
