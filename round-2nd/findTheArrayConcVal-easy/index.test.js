const findTheArrayConcVal = require('./solution')

test('findTheArrayConcVal', () => {
  expect(findTheArrayConcVal([7, 52, 2, 4])).toEqual(596)
  expect(findTheArrayConcVal([5, 14, 13, 8, 12])).toEqual(673)
})
