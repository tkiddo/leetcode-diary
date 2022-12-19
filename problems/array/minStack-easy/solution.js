/**
 * initialize your data structure here.
 */
const MinStack = function () {
  this.list = []
  this.mins = []
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.list.push(x)
  if (!this.mins.length) {
    this.mins.push(x)
  } else {
    const min = this.mins[this.mins.length - 1]
    if (x <= min) {
      this.mins.push(x)
    }
  }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const val = this.list.pop()
  if (val === this.mins[this.mins.length - 1]) {
    this.mins.pop()
  }
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.list[this.list.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
  return this.mins[this.mins.length - 1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */

module.exports = MinStack
