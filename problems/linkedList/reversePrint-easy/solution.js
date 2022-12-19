/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
const reversePrint2 = function (head) {
  const result = []
  let current = head
  while (current) {
    // 首位加元素会影响后面元素后移，复杂度升高
    result.unshift(current.val)
    current = current.next
  }
  return result
}

const reversePrint = function (head) {
  const stack = []
  let current = head
  while (current) {
    stack.push(current.val)
    current = current.next
  }
  const result = []
  while (stack.length) {
    result.push(stack.pop())
  }
  return result
}

module.exports = { reversePrint }
