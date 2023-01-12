/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  const stack = []
  let pop = 0
  for (let i = 0; i < pushed.length; i++) {
    stack.push(pushed[i])
    while (stack.length && stack[stack.length - 1] === popped[pop]) {
      stack.pop()
      pop++
    }
  }
  return stack.length === 0
}

module.exports = {
  validateStackSequences,
}
