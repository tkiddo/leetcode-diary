const CQueue = function () {
  this.stackOne = []
  this.stackTwo = []
}

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.stackOne.push(value)
}

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (!this.stackTwo.length) {
    if (!this.stackOne.length) {
      return -1
    }
    while (this.stackOne.length) {
      this.stackTwo.push(this.stackOne.pop())
    }
  }
  return this.stackTwo.pop()
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

module.exports = CQueue
