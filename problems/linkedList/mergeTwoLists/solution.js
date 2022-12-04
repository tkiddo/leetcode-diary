function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function (list1, list2) {
  if (list1 === null || list2 === null) {
    return list1 === null ? list2 : list1
  }
  let current, current1, current2, head
  if (list1.val < list2.val) {
    current = list1
    current1 = list1.next
    current2 = list2
  } else {
    current = list2
    current1 = list1
    current2 = list2.next
  }
  head = current
  while (current1 && current2) {
    if (current1.val < current2.val) {
      current.next = current1
      current1 = current1.next
    } else {
      current.next = current2
      current2 = current2.next
    }
    current = current.next
  }
  current.next = current1 === null ? current2 : current1
  return head
}

module.exports = {
  ListNode,
  mergeTwoLists
}
