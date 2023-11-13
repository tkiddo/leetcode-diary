const { ListNode, addTwoNumbers } = require('./solution.js')

/**
 * 输入：(7 -> 1 -> 6) + (5 -> 9 -> 2)，即 617 + 295
输出：2 -> 1 -> 9，即 912
 */
test('addTwoNumbers', () => {
  const l1 = new ListNode(7)
  l1.next = new ListNode(1)
  l1.next.next = new ListNode(6)
  const l2 = new ListNode(5)
  l2.next = new ListNode(9)
  l2.next.next = new ListNode(2)
  const l3 = addTwoNumbers(l1, l2)
  expect(l3.val).toBe(2)
  expect(l3.next.val).toBe(1)
  expect(l3.next.next.val).toBe(9)
})
