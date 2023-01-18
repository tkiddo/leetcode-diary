const { generateParenthesis } = require('./solution')

test('example 1', () => {
  const n = 3

  const result = generateParenthesis(n)
  const target = ['((()))', '(()())', '(())()', '()(())', '()()()']
  const isCorrect =
    result.every((item) => target.includes(item)) &&
    target.every((item) => result.includes(item))
  expect(isCorrect).toEqual(true)
})

test('example 2', () => {
  const n = 1

  const result = generateParenthesis(n)
  expect(result).toEqual(['()'])
})

test('example 3', () => {
  const n = 2

  const result = generateParenthesis(n)
  expect(result).toEqual(['()()', '(())'])
})

test('example 4', () => {
  const n = 4

  const result = generateParenthesis(n)
  /**
   *
   */
  const target = [
    '(((())))',
    '((()()))',
    '((())())',
    '((()))()',
    '(()(()))',
    '(()()())',
    '(()())()',
    '(())(())',
    '(())()()',
    '()((()))',
    '()(()())',
    '()(())()',
    '()()(())',
    '()()()()',
  ]
  const isCorrect =
    result.every((item) => target.includes(item)) &&
    target.every((item) => result.includes(item))

  expect(isCorrect).toEqual(true)
})
