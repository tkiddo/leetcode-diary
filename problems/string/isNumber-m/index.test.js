const { isNumber } = require('./solution')

test('example 1', () => {
  const s = '0'

  const result = isNumber(s)
  expect(result).toBe(true)
})

test('example 2', () => {
  const s = 'e'

  const result = isNumber(s)
  expect(result).toBe(false)
})

test('example 3', () => {
  const s = '.'

  const result = isNumber(s)
  expect(result).toBe(false)
})

test('example 4', () => {
  const s = '.1'

  const result = isNumber(s)
  expect(result).toBe(true)
})

test('example 5', () => {
  const s = '-1E-16'

  const result = isNumber(s)
  expect(result).toBe(true)
})
