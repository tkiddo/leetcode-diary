const { minArray } = require('./solution')

test('example 1', () => {
  const numbers = [3, 4, 5, 1, 2]

  const result = minArray(numbers)
  expect(result).toBe(1)
})
