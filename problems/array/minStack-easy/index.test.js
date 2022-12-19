const MinStack = require('./solution')

test('MinStack', () => {
  const stack = new MinStack()
  stack.push(-2)
  stack.push(0)
  stack.push(-3)
  expect(stack.min()).toBe(-3)
  stack.pop()
  expect(stack.top()).toBe(0)
  expect(stack.min()).toBe(-2)
})
