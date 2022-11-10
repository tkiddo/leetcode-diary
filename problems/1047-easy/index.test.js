const { removeDuplicates, removeDuplicates2 } = require('./solution')

describe('removeDuplicates', () => {
  test('removeDuplicates params aa', () => {
    const s = 'aa'
    expect(removeDuplicates(s)).toBe('')
  })

  test('removeDuplicates params abbaca', () => {
    const s = 'abbaca'
    expect(removeDuplicates(s)).toBe('ca')
  })
})

describe('removeDuplicates2', () => {
  test('removeDuplicates2 params aa', () => {
    const s = 'aa'
    expect(removeDuplicates2(s)).toBe('')
  })

  test('removeDuplicates2 params abbaca', () => {
    const s = 'abbaca'
    expect(removeDuplicates2(s)).toBe('ca')
  })
})
