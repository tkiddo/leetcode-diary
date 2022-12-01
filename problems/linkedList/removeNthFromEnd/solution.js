// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

/**
 * 我的题解：
 * 遍历得长度，每个节点存哈希表，找到删除的节点
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
  let len = 1
  let current = head
  const indexHash = {}
  while (current.next) {
    indexHash[len] = current
    len++
    current = current.next
  }
  indexHash[len - n].next = indexHash[len - n].next.next
  return head
}

module.exports = {
  ListNode,
  removeNthFromEnd,
}
