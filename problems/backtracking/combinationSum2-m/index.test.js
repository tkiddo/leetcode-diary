const combinationSum2 = require('./solution')

test('example 1', () => {
  const candidates = [1, 1, 2, 5, 6, 7, 10]
  const target = 8
  const output = [
    [1, 1, 6],
    [1, 2, 5],
    [1, 7],
    [2, 6],
  ]

  expect(combinationSum2(candidates, target)).toEqual(output)
})
