function MaxPriorityQueue() {
  this.q = []
}

MaxPriorityQueue.prototype.enqueue = function (element) {
  this.q.push(element)
}

MaxPriorityQueue.prototype.dequeue = function () {
  let max = -Infinity
  let maxIndex = -1
  for (let i = 0; i < this.q.length; i++) {
    if (this.q[i] > max) {
      max = this.q[i]
      maxIndex = i
    }
  }
  this.q.splice(maxIndex, 1)
  return { element: max }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function (nums, k) {
  const q = new MaxPriorityQueue()
  let ans = 0
  for (const num of nums) {
    q.enqueue(num)
  }
  for (let i = 0; i < k; i++) {
    const x = q.dequeue().element
    ans += x
    q.enqueue(Math.ceil(x / 3))
  }
  return ans
}

module.exports = maxKelements
