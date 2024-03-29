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
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  const next = node.next
  node.val = next.val
  node.next = next.next
}

module.exports = {
  ListNode,
  deleteNode,
}
