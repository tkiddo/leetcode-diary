const combine = require('./solution')
const { hasSameElements } = require('utils.js')

test('example 1', () => {
  const n = 4
  const k = 2
  const output = [
    [2, 4],
    [3, 4],
    [2, 3],
    [1, 2],
    [1, 3],
    [1, 4],
  ]

  const result = combine(n, k)

  expect(hasSameElements(output, result)).toEqual(true)
})
