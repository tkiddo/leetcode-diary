/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let dp = []
  for (let i = 1; i <= n; i++) {
    const newDp = []
    if (!dp.length) {
      newDp.push('()')
    } else {
      const map = {}
      for (let j = 0; j < dp.length; j++) {
        const prev = `()${dp[j]}`
        if (!map[prev]) {
          newDp.push(prev)
          map[prev] = true
        }
        const post = `${dp[j]}()`
        if (!map[post]) {
          newDp.push(post)
          map[post] = true
        }
        const wrap = `(${dp[j]})`
        if (!map[wrap]) {
          newDp.push(wrap)
          map[wrap] = true
        }
        for (let k = 0; k < dp[j].length; k++) {
          if (dp[j][k] === '(') {
            const insert = `${dp[j].slice(0, k + 1)}()${dp[j].slice(k + 1)}`
            if (!map[insert]) {
              newDp.push(insert)
              map[insert] = true
            }
          }
        }
      }
    }
    dp = newDp
  }
  return dp
}

module.exports = {
  generateParenthesis,
}
