/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
//给你一幅由 N × N 矩阵表示的图像，其中每个像素的大小为 4 字节。请你设计一种算法，将图像旋转 90 度。
const rotate = (matrix) => {
  const len = matrix.length
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len - i - 1; j++) {
      const temp = matrix[i][j]
      matrix[i][j] = matrix[len - j - 1][i]
      matrix[len - j - 1][i] = matrix[len - i - 1][len - j - 1]
      matrix[len - i - 1][len - j - 1] = matrix[j][len - i - 1]
      matrix[j][len - i - 1] = temp
    }
  }
}

module.exports = rotate
