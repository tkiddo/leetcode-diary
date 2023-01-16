/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {
  if (!head) {
    return false
  }
  let slow = head,
    fast = head.next
  while (slow !== fast) {
    if (fast === null) {
      return false
    }
    if (fast.next === null) {
      return false
    }
    slow = slow.next
    fast = fast.next.next
  }
  return true
}

module.exports = {
  ListNode,
  hasCycle,
}
