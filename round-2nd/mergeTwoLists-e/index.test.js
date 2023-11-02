const { ListNode, mergeTwoLists } = require('./solution')

/**
 * 示例 1：

输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
示例 2：

输入：l1 = [], l2 = []
输出：[]
示例 3：

输入：l1 = [], l2 = [0]
输出：[0]
 */

test('mergeTwoLists', () => {
  const list1 = new ListNode(1)
  list1.next = new ListNode(2)
  list1.next.next = new ListNode(4)
  const list2 = new ListNode(1)
  list2.next = new ListNode(3)
  list2.next.next = new ListNode(4)
  const list = mergeTwoLists(list1, list2)
  expect(list.val).toBe(1)
  expect(list.next.val).toBe(1)
  expect(list.next.next.val).toBe(2)
  expect(list.next.next.next.val).toBe(3)
  expect(list.next.next.next.next.val).toBe(4)
  expect(list.next.next.next.next.next.val).toBe(4)
  expect(list.next.next.next.next.next.next).toBeNull()
})

test('mergeTwoLists', () => {
  const list1 = new ListNode(1)
  list1.next = new ListNode(2)
  list1.next.next = new ListNode(4)
  const list2 = null
  const list = mergeTwoLists(list1, list2)
  expect(list.val).toBe(1)
  expect(list.next.val).toBe(2)
  expect(list.next.next.val).toBe(4)
  expect(list.next.next.next).toBeNull()
})
