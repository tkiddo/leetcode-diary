const compressString = require('./solution.js')

/**
 * 示例1:

 输入："aabcccccaaa"
 输出："a2b1c5a3"
示例2:

 输入："abbccd"
 输出："abbccd"
 解释："abbccd"压缩后为"a1b2c2d1"，比原字符串长度更长。
 */

describe('compressString', () => {
  test('compressString("aabcccccaaa") should be "a2b1c5a3"', () => {
    expect(compressString('aabcccccaaa')).toBe('a2b1c5a3')
  })
  test('compressString("abbccd") should be "abbccd"', () => {
    expect(compressString('abbccd')).toBe('abbccd')
  })
})
