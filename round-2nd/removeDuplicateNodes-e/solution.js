/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const ListNode = function (val) {
  this.val = val
  this.next = null
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeDuplicateNodes = function (head) {
  if (!head) return head
  const nodeMap = new Map()
  let prev = head,
    current = prev.next
  nodeMap.set(prev.val, true)
  while (current) {
    if (!nodeMap.get(current.val)) {
      nodeMap.set(current.val, true)
      prev = current
      current = current.next
    } else {
      current = current.next
      prev.next = current
    }
  }
  return head
}

module.exports = {
  removeDuplicateNodes,
  ListNode,
}
