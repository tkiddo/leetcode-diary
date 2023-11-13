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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let adder = 0
  let c1 = l1,
    c2 = l2
  let l3 = null,
    c3 = l3
  while (c1 || c2 || adder) {
    let result = 0
    if (c1) {
      result += c1.val
      c1 = c1.next
    }
    if (c2) {
      result += c2.val
      c2 = c2.next
    }
    if (adder) {
      result += adder
      adder--
    }
    if (result > 9) {
      result = result - 10
      adder++
    }
    const target = new ListNode(result)
    if (!c3) {
      c3 = target
      l3 = c3
    } else {
      c3.next = target
      c3 = c3.next
    }
  }
  return l3
}

module.exports = {
  ListNode,
  addTwoNumbers,
}
