/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// var setZeroes = function (matrix) {
//   const row = new Map(),
//     col = new Map(),
//     colLength = matrix[0].length
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < colLength; j++) {
//       if (matrix[i][j] === 0) {
//         row.set(i, true)
//         col.set(j, true)
//       }
//     }
//   }

//   for (let i = 0; i < matrix.length; i++) {
//     const zeroRow = row.get(i)
//     for (let j = 0; j < colLength; j++) {
//       const zeroCol = col.get(j)
//       if (zeroRow || zeroCol) {
//         matrix[i][j] = 0
//       }
//     }
//   }
// }

var setZeroes = function (matrix) {
  const colLength = matrix[0].length
  let col0 = false
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      col0 = true
    }
    for (let j = 1; j < colLength; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = matrix[0][j] = 0
      }
    }
  }

  for (let i = matrix.length - 1; i >= 0; i--) {
    for (let j = colLength - 1; j >= 1; j--) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0
      }
    }
    if (col0) {
      matrix[i][0] = 0
    }
  }
}

module.exports = setZeroes
