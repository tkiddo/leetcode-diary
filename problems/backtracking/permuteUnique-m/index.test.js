const permuteUnique = require('./solution.js')

test('Example 1', () => {
  const nums = [1, 1, 2]

  const result = permuteUnique(nums)

  console.log(result)

  expect(result).toEqual([
    [1, 1, 2],
    [1, 2, 1],
    [2, 1, 1],
  ])
})
