/**
 * @param {string} s
 * @return {boolean}
 */
/**
 * 元素，   状态，   下一状态
 * blank   blank    sign,number,dot,blank
 * +,-     sign     number,dot
 * .       dot      number,blank
 * 0-9     number   e,blank,dot
 * e,E     e        number,sign
 *
 * 只能有一个dot，结束状态不能是sign，e
 */
var isNumber = function (s) {
  s = s.trim()
  if (s.length === 0) return false
  if (s === '.') return false
  const state = {
    start: {
      el: [' '],
      next: ['sign', 'dot', 'number'],
    },
    sign: {
      el: ['+', '-'],
      next: ['number', 'dot'],
    },
    dot: {
      el: ['.'],
      next: ['number', 'e'],
    },
    number: {
      el: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      next: ['e', 'dot', 'number'],
    },
    e: {
      el: ['e', 'E'],
      next: ['sign', 'number'],
    },
  }
  let status = 'start'
  let dot = 0
  let preDot = false
  let e = 0
  for (let i = 0; i < s.length; i++) {
    const next = state[status].next
    let flag = false
    for (let j = 0; j < next.length; j++) {
      if (state[next[j]].el.includes(s[i])) {
        if (status === 'dot') {
          if (preDot !== 'number' && next[j] === 'e') {
            return false
          }
        }
        if (next[j] === 'dot') {
          if (e > 0) return false
          if (dot > 0) return false
          preDot = status
          dot++
        }
        if (next[j] === 'e') {
          if (e > 0) return false
          e++
        }
        status = next[j]
        flag = true
      }
    }
    if (!flag) {
      return false
    }
  }
  if (
    status === 'e' ||
    status === 'sign' ||
    (status === 'dot' && preDot !== 'number')
  ) {
    return false
  }
  return true
}

module.exports = {
  isNumber,
}
