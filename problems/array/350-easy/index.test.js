const { intersect } = require('./soultion')

describe('intersect', () => {
  it('should return the intersection of two arrays', () => {
    const nums1 = [1, 2, 2, 1]
    const nums2 = [2, 2]
    const result = intersect(nums1, nums2)
    expect(result).toEqual([2, 2])
  })
})
