const { permute } = require('./solution')

test('example 1', () => {
  const nums = [1, 2, 3]

  const result = permute(nums)
  expect(result).toEqual([
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1],
  ])
})
