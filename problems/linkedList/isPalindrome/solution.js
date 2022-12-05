/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function (head) {
  if (!head || !head.next) {
    return true
  }
  const valArr = []
  let current = head
  while (current) {
    valArr.push(current.val)
    current = current.next
  }
  let result = true
  for (let i = 0; i < valArr.length - i; i++) {
    if (valArr[i] !== valArr[valArr.length - i - 1]) {
      result = false
      break
    }
  }
  return result
}

module.exports = {
  ListNode,
  isPalindrome
}
