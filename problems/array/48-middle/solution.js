/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {
  const rowLength = matrix[0].length
  for (let i = 0; i <= rowLength / 2 - 1; i++) {
    let p = i
    let q = i
    let current = matrix[p][q]
    let next
    do {
      next = matrix[q][rowLength - p - 1]
      matrix[q][rowLength - p - 1] = current
      current = next
      let tempP = p
      p = q
      q = rowLength - tempP - 1
    } while (i !== p && i !== q)
    matrix[p][q] = current
  }
}

module.exports = {
  rotate
}
