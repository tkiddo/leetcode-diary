const combinationSum = require('./solution')

test('example 1', () => {
  const candidates = [2, 3, 6, 7]
  const target = 7
  const output = [[2, 2, 3], [7]]

  expect(combinationSum(candidates, target)).toEqual(output)
})
