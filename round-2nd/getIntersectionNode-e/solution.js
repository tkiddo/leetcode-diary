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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) {
    return null
  }
  let currentA = headA,
    currentB = headB,
    linkA = false,
    linkB = false
  while (currentA || currentB) {
    if (currentA === currentB) {
      return currentA
    }
    if (currentA === headB) {
      return currentA
    }
    if (currentB === headA) {
      return currentB
    }
    if (!currentA && !linkB) {
      currentA = headB
      linkB = true
    }
    if (!currentB && !linkA) {
      currentB = headA
      linkA = true
    }
    currentA = currentA.next
    currentB = currentB.next
  }
  return null
}

module.exports = {
  ListNode,
  getIntersectionNode,
}
