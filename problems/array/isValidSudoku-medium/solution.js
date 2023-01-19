/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
  const isRepeat = (arr) => {
    let result = true
    const hash = {}
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== '.' && hash[arr[i]]) {
        result = false
        break
      } else {
        result[arr[i]] = true
      }
    }
  }
  let val = true
  for (let i = 0; i < board.length; i++) {
    const rowRepeat = isRepeat(board[i])
    if (!rowRepeat) {
      val = false
      break
    }
  }
  const hash = {}
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (hash[board[j][i]] && board[j][i] !== '.') {
        val = false
        break
      } else {
        hash[board[j][i]] = true
      }
    }
  }

  return val
}

module.exports = {
  isValidSudoku
}
