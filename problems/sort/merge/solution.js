/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  if (m === 0 || n === 0) {
    nums1.concat(nums2)
  }
  const result = []
  let i = 0
  let j = 0
  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      result.push(nums1[i])
      i++
    } else {
      result.push(nums2[j])
      j++
    }
  }
  const rest = i === m ? nums2 : nums1
  const restIndex = i === m ? j : i
  const restLength = i === m ? n : m
  for (let q = restIndex; q < restLength; q++) {
    result.push(rest[q])
  }
  for (let k = 0; k < m + n; k++) {
    nums1[k] = result[k]
  }
}

module.exports = {
  merge,
}
