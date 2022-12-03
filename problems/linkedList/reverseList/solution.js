// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
  if (!head) {
    return head
  }
  if (!head.next) {
    return head
  }
  // 保存反转后当前头节点
  let currentHead = head
  // 保存遍历的节点
  let current = head.next
  // 反转完成后为最后一个节点，即下一个节点为null，否则会成环
  currentHead.next = null
  while (current) {
    // 保存临时下一个节点
    let temp = current.next
    // 掉头
    current.next = currentHead
    // 保存新的头节点
    currentHead = current
    // 遍历下一个节点
    current = temp
  }
  return currentHead
}

module.exports = {
  ListNode,
  reverseList
}
