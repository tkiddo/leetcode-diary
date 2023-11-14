const { ListNode, isPalindrome } = require('./solution.js')

/**
 * 示例 1：

输入： 1->2
输出： false
示例 2：

输入： 1->2->2->1
输出： true
 */

test('示例 1', () => {
  const head = new ListNode(1)
  head.next = new ListNode(2)
  expect(isPalindrome(head)).toBe(false)
})

test('示例 2', () => {
  const head = new ListNode(1)
  head.next = new ListNode(2)
  head.next.next = new ListNode(2)
  head.next.next.next = new ListNode(1)
  expect(isPalindrome(head)).toBe(true)
})
