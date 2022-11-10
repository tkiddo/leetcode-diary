const {
  removeDuplicates,
  removeDuplicates2,
  removeDuplicates3,
} = require('./solution')

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

describe('removeDuplicates3', () => {
  test('removeDuplicates3 params aa', () => {
    const s = 'aa'
    expect(removeDuplicates3(s)).toBe('')
  })

  test('removeDuplicates3 params abbaca', () => {
    const s = 'abbaca'
    expect(removeDuplicates3(s)).toBe('ca')
  })
})
