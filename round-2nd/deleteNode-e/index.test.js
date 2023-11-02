const { ListNode, deleteNode } = require('./solution')

/**
 * 输入：节点 5 （位于单向链表 4->5->1->9 中）
输出：不返回任何数据，从链表中删除传入的节点 5，使链表变为 4->1->9
 */

test('deleteNode', () => {
  const node = new ListNode(5)
  node.next = new ListNode(1)
  node.next.next = new ListNode(9)
  deleteNode(node)
  expect(node.val).toBe(1)
  expect(node.next.val).toBe(9)
  expect(node.next.next).toBeNull()
})
