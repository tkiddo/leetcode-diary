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
var isPalindrome = function (head) {
  const arr = []
  let current = head
  while (current) {
    arr.push(current.val)
    current = current.next
  }
  if (arr.length < 2) {
    return true
  }
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false
    }
  }
  return true
}

module.exports = {
  isPalindrome,
  ListNode,
}
