const { ListNode, kthToLast } = require('./solution.js')

/**
 * 输入： 1->2->3->4->5 和 k = 2
输出： 4
 */

test('kthToLast', () => {
  const head = new ListNode(1)
  head.next = new ListNode(2)
  head.next.next = new ListNode(3)
  expect(kthToLast(head, 2)).toBe(2)
})
