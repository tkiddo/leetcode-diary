const { plusOne } = require('./soultion')

describe('plusOne', () => {
  it('should return [1,2,4] when input is [1,2,3]', () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4])
  })
  it('should return [4,3,2,2] when input is [4,3,2,1]', () => {
    expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2])
  })
  it('should return [1,0,0,0] when input is [9,9,9]', () => {
    expect(plusOne([9, 9, 9])).toEqual([1, 0, 0, 0])
  })
})
