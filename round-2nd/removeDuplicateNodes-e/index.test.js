const { removeDuplicateNodes, ListNode } = require('./solution.js')

/**
 * 示例1:

 输入：[1, 2, 3, 3, 2, 1]
 输出：[1, 2, 3]
示例2:

 输入：[1, 1, 1, 1, 2]
 输出：[1, 2]
提示：
 */

test('removeDuplicateNodes', () => {
  const node = new ListNode(1)
  node.next = new ListNode(2)
  node.next.next = new ListNode(3)
  node.next.next.next = new ListNode(3)
  node.next.next.next.next = new ListNode(2)
  node.next.next.next.next.next = new ListNode(1)
  expect(removeDuplicateNodes(node)).toEqual(node)
})

test('removeDuplicateNodes', () => {
  const node = new ListNode(1)
  node.next = new ListNode(1)
  node.next.next = new ListNode(1)
  node.next.next.next = new ListNode(1)
  node.next.next.next.next = new ListNode(2)
  expect(removeDuplicateNodes(node)).toEqual(node)
})
