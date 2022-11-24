const { firstUniqChar } = require('./solution')

describe('firstUniqChar', () => {
  it('returns the index of the first unique character', () => {
    expect(firstUniqChar('leetcode')).toEqual(0)
  })
  it('returns -1 if there is no unique character', () => {
    expect(firstUniqChar('loveleetcode')).toEqual(2)
  })
})
