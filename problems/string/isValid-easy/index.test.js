const {isValid} = require('./solution')

test('isValid', () => {
  expect(isValid('()')).toBe(true)
  expect(isValid('()[]{}')).toBe(true)
  expect(isValid('(]')).toBe(false)
  expect(isValid('([)]')).toBe(false)
  expect(isValid('{[]}')).toBe(true)
})