/**
 * 我的题解：
 * 三层循环
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {
  const rowLength = matrix[0].length

  for (let i = 0; i <= rowLength / 2 - 1; i++) {
    for (let p = i; p < rowLength - i - 1; p++) {
      let q = i
      let r = p
      let current = matrix[q][r]
      let next
      for (let k = 0; k < 4; k++) {
        next = matrix[r][rowLength - q - 1]
        matrix[r][rowLength - q - 1] = current
        current = next
        let tempQ = q
        q = r
        r = rowLength - tempQ - 1
      }
    }
  }
}

module.exports = {
  rotate,
}
