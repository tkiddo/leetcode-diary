/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val) {
  this.val = val
  this.next = null
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// var mergeTwoLists = function (list1, list2) {
//   if (!list1) return list2
//   if (!list2) return list1
//   let l1 = list1,
//     l2 = list2,
//     l3 = null,
//     head = l3
//   while (l1 && l2) {
//     const small = l1.val < l2.val ? l1 : l2
//     if (!l3) {
//       l3 = small
//       head = l3
//     } else {
//       l3.next = small
//       l3 = small
//     }
//     if (l1.val < l2.val) {
//       l1 = l1.next
//     } else {
//       l2 = l2.next
//     }
//   }
//   if (l1) {
//     l3.next = l1
//   }
//   if (l2) {
//     l3.next = l2
//   }
//   return head
// }

var mergeTwoLists = (list1, list2) => {
  if (!list1) return list2
  if (!list2) return list1
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2)
    return list1
  } else {
    list2.next = mergeTwoLists(list1, list2.next)
    return list2
  }
}

module.exports = {
  ListNode,
  mergeTwoLists,
}
