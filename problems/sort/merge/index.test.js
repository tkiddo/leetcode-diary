const { merge } = require('./solution')

describe('merge', () => {
  it('merges two sorted arrays', () => {
    const nums1 = [1, 2, 3, 0, 0, 0]
    const nums2 = [2, 5, 6]
    merge(nums1, 3, nums2, 3)
    expect(nums1).toEqual([1, 2, 2, 3, 5, 6])
  })
})
