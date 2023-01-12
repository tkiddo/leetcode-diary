/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let result = []
  let row = 0
  let col = 0
  let rowMax = matrix.length - 1
  let colMax = matrix[0].length - 1
  let total = matrix.length * matrix[0].length
  let count = 0

  while (count < total) {
    for (let i = col; i <= colMax; i++) {
      result.push(matrix[row][i])
      count++
    }
    row++
    for (let i = row; i <= rowMax; i++) {
      result.push(matrix[i][colMax])
      count++
    }
    colMax--
    for (let i = colMax; i >= col; i--) {
      result.push(matrix[rowMax][i])
      count++
    }
    rowMax--
    for (let i = rowMax; i >= row; i--) {
      result.push(matrix[i][col])
      count++
    }
    col++
  }

  return result
}

module.exports = {
  spiralOrder,
}
