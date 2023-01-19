/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers2 = function (l1, l2) {
  if (!l1) {
    return l2
  }
  if (!l2) {
    return l1
  }
  let c1 = l1,
    c2 = l2,
    c = null,
    head = c,
    plus = 0
  while (c1 && c2) {
    let val = c1.val + c2.val
    if (plus) {
      val = val + plus
      plus--
    }
    if (val > 9) {
      val = val - 10
      plus++
    }
    const node = new ListNode(val, null)
    if (!c) {
      c = node
      head = c
    } else {
      c.next = node
      c = c.next
    }
    c1 = c1.next
    c2 = c2.next
  }
  while (c1) {
    let val = c1.val
    if (plus) {
      val = val + plus
      plus--
    }
    if (val > 9) {
      val = val - 10
      plus++
    }
    const node = new ListNode(val, null)
    c.next = node
    c = c.next
    c1 = c1.next
  }
  while (c2) {
    let val = c2.val
    if (plus) {
      val = val + plus
      plus--
    }
    if (val > 9) {
      val = val - 10
      plus++
    }
    const node = new ListNode(val, null)
    c.next = node
    c = c.next
    c2 = c2.next
  }
  if (plus === 1) {
    c.next = new ListNode(1, null)
  }
  return head
}

// 官方题解
var addTwoNumbers = function (l1, l2) {
  const dummyHead = new ListNode(0)
  let p = l1,
    q = l2,
    curr = dummyHead
  let carry = 0
  while (p !== null || q !== null) {
    const x = p !== null ? p.val : 0
    const y = q !== null ? q.val : 0
    const sum = carry + x + y
    carry = Math.floor(sum / 10)
    curr.next = new ListNode(sum % 10)
    curr = curr.next
    if (p !== null) p = p.next
    if (q !== null) q = q.next
  }
  if (carry > 0) {
    curr.next = new ListNode(carry)
  }
  return dummyHead.next
}

module.exports = {
  ListNode,
  addTwoNumbers,
}
