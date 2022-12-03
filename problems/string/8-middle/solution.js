/**
 * @param {string} s
 * @return {number}
 */
const myAtoi2 = function (s) {
  const target = []
  for (let i = 0; i < s.length; i++) {
    if ((s[i] === '-' || s[i] === '+') && target.length === 0) {
      target.push(s[i])
    } else if (s[i] === ' ' && target.length === 0) {
    } else if (!isNaN(parseInt(s[i]))) {
      target.push(s[i])
    } else {
      break
    }
  }
  const result = parseInt(target.join(''))
  if (isNaN(result)) {
    return 0
  }
  const max = Math.pow(2, 31) - 1
  if (result > max) {
    return max
  }
  const min = -Math.pow(2, 31)
  if (result < min) {
    return min
  }
  return result
}

/**
 * 状态列表
 * start：空格，next：start，sign，number，end
 * sign：正负号，next：number，end
 * number：数字，next：number
 * end：结束
 */
const myAtoi = function (s) {
  let status = 'start'
  let sign = 1
  let statusMap = {
    start: ['start', 'sign', 'number'],
    sign: ['number'],
    number: ['number']
  }
  let answer = 0
  const max = Math.pow(2, 31) - 1
  const min = -Math.pow(2, 31)
  const getStatus = (char) => {
    if (char === ' ') {
      return 'start'
    }
    if (char === '+' || char === '-') {
      return 'sign'
    }
    if (!isNaN(char)) {
      return 'number'
    }
    return 'end'
  }
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    const charStatus = getStatus(char)
    if (statusMap[status] && statusMap[status].includes(charStatus)) {
      status = charStatus
      if (status === 'sign') {
        sign = char === '-' ? -1 : 1
      }
      if (status === 'number') {
        answer = answer * 10 + Number(char)
        const result = sign * answer

        if (result > max) {
          return max
        }

        if (result < min) {
          return min
        }
      }
    } else {
      break
    }
  }

  return sign * answer
}

module.exports = {
  myAtoi,
  myAtoi2
}
