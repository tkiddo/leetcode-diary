const Solution = require('./solution')

describe('shuffle-middle', () => {
  it('should pass the test cases', () => {
    const nums = [1, 2, 3]
    const solution = new Solution(nums)
    const reset = solution.reset()
    const shuffle = solution.shuffle()
    expect(reset).toEqual(nums)
    // expect(shuffle).not.toEqual(nums)
  })
})
