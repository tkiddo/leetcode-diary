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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  const dummy = new ListNode()
  dummy.next = head

  let prev = dummy
  let current = head
  let prevBigger = dummy
  let currentBigger = head

  while (current) {
    if (current.val >= x) {
      prevBigger = currentBigger
      currentBigger = currentBigger.next
      prev = current
      current = current.next
    } else {
      prev.next = current.next
      prevBigger.next = current
      current.next = currentBigger
      prevBigger = current
      current = prev.next
    }
  }

  return dummy.next
}
// var partition = function (head, x) {
//   if (!head || !head.next) {
//     return head
//   }
//   let prev = null,
//     current = head,
//     smallHead = prev
//   let biggerHead = null,
//     bigger = biggerHead
//   while (current) {
//     if (current.val > x) {
//       if (bigger) {
//         bigger.next = current
//         bigger = bigger.next
//       } else {
//         biggerHead = current
//         bigger = biggerHead
//       }
//       if (prev) {
//         prev.next = current.next
//       }
//       current = current.next
//     } else {
//       prev = current
//       current = current.next
//       smallHead = prev
//     }
//   }
//   if (smallHead) {
//     prev.next = biggerHead
//     return smallHead
//   } else {
//     return biggerHead
//   }
// }

module.exports = {
  partition,
  ListNode,
}
