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
  if (len === n) {
    if (head.next) {
      return head.next
    } else {
      return null
    }
  }
  indexHash[len - n].next = indexHash[len - n].next.next
  return head
}

/**
 * 官方题解：双指针
 * @param {} head
 * @param {*} n
 * @returns
 */

const removeNthFromEnd2 = function (head, n) {
  let index = 1
  let slow = new ListNode(undefined, head)
  let fast = head
  while (fast.next) {
    index++
    fast = fast.next
    if (index > n) {
      slow = slow.next
    }
  }
  if (index === n) {
    return head.next
  }
  slow.next = slow.next.next
  return head
}

module.exports = {
  ListNode,
  removeNthFromEnd,
  removeNthFromEnd2
}
