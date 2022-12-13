const { bubbleSort, selectionSort } = require('./solution')

describe('bubbleSort', () => {
  it('should return sorted array', () => {
    const nums = [2, 3, 0, 4, 1, 6, 9, 10, 8, 7, 5]
    expect(bubbleSort(nums)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})

describe('selectionSort', () => {
  it('should return sorted array', () => {
    const nums = [2, 3, 0, 4, 1, 6, 9, 10, 8, 7, 5]
    expect(selectionSort(nums)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})
