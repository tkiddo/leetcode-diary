const { spiralOrder } = require('./solution')

test('example 1', () => {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]

  const result = spiralOrder(matrix)

  expect(result).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5])
})
