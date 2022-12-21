const { search } = require('./solution')

test('example 1', () => {
  const nums = [5, 7, 7, 8, 8, 10]
  const target = 8

  const result = search(nums, target)
  expect(result).toBe(2)
})

test('example 2', () => {
  const nums = [5, 7, 7, 8, 8, 10]
  const target = 6

  const result = search(nums, target)
  expect(result).toBe(0)
})

test('example 3', () => {
  const nums = []
  const target = 0

  const result = search(nums, target)
  expect(result).toBe(0)
})

test('example 4', () => {
  const nums = [1]
  const target = 1

  const result = search(nums, target)
  expect(result).toBe(1)
})

test('example 5', () => {
  const nums = [2, 2]
  const target = 1

  const result = search(nums, target)
  expect(result).toBe(0)
})
