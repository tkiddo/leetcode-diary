/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 局限了思路，还在找头节点。。。
 *
 */
function ListNode(val) {
  this.val = val
  this.next = null
}
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = function (node) {
  node.val = node.next.val
  node.next = node.next.next
}

module.exports = {
  ListNode,
  deleteNode,
}
