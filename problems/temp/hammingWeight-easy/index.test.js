const { hammingWeight } = require('./solution')

test('example 1', () => {
  const n = 0b00000000000000000000000000001011

  const result = hammingWeight(n)
  expect(result).toBe(3)
})
