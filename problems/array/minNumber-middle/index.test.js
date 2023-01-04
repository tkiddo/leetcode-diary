const { minNumber } = require('./solution')

test('example 1', () => {
  const nums = [10, 2]
  const output = '102'

  expect(minNumber(nums)).toEqual(output)
})

test('example 2', () => {
  const nums = [3, 30, 34, 5, 9]
  const output = '3033459'

  expect(minNumber(nums)).toEqual(output)
})
