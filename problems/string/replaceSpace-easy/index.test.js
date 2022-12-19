const { replaceSpace } = require('./solution.js')

test('replaceSpace', () => {
  expect(replaceSpace('We are happy')).toBe('We%20are%20happy')
})
