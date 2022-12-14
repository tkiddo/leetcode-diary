const {
  bubbleSort,
  selectionSort,
  mergeSort,
  quickSort,
  insertSort,
} = require('./solution')

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

describe('mergeSort', () => {
  it('should return sorted array', () => {
    const nums = [2, 3, 0, 4, 1, 6, 9, 10, 8, 7, 5]
    expect(mergeSort(nums)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})

describe('quickSort', () => {
  it('should return sorted array', () => {
    const nums = [2, 3, 0, 4, 1, 6, 9, 10, 8, 7, 5]
    expect(quickSort(nums)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})

describe.only('insertSort', () => {
  it('should return sorted array', () => {
    const nums = [2, 3, 0, 4, 1, 6, 9, 10, 8, 7, 5]
    expect(insertSort(nums)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})
