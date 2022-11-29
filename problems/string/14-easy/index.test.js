const { longestCommonPrefix } = require('./solution')

describe('longestCommonPrefix', () => {
  it('returns the longest common prefix', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toEqual('fl')
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toEqual('')
    expect(longestCommonPrefix([''])).toEqual('')
    expect(longestCommonPrefix(['cir', 'car'])).toEqual('c')
    expect(longestCommonPrefix(['aba', 'arc', ''])).toEqual('')
  })
})
