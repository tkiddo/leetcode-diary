const { fib } = require('./solution')

test('test case 1', () => {
  const n = 2

  const result = fib(n)
  expect(result).toBe(1)
})

test('test case 2', () => {
  const n = 3

  const result = fib(n)
  expect(result).toBe(2)
})

test('test case 3', () => {
  const n = 4

  const result = fib(n)
  expect(result).toBe(3)
})

test('test case 4', () => {
  const n = 45

  const result = fib(n)
  expect(result).toBe(134903163)
})

test('test case 5', () => {
  const n = 81

  const result = fib(n)
  expect(result).toBe(107920472)
})
