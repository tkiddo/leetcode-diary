/**
 * Definition for singly-linked list.
 
 */
function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) {
    return null
  }
  let a = headA,
    b = headB
  while (a !== b) {
    a = a === null ? headB : a.next
    b = b === null ? headA : b.next
  }
  return a
}

module.exports = {
  ListNode,
  getIntersectionNode,
}
