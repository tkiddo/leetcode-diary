const { ListNode, partition } = require('./solution')
const { list2Array } = require('../../utils/utils')

/**
 * 示例 1：

输入：head = [1,4,3,2,5,2], x = 3
输出：[1,2,2,4,3,5]
示例 2：

输入：head = [2,1], x = 2
输出：[1,2]
 */

test('partition', () => {
  const head = new ListNode(1)
  head.next = new ListNode(4)
  head.next.next = new ListNode(3)
  head.next.next.next = new ListNode(2)
  head.next.next.next.next = new ListNode(5)
  head.next.next.next.next.next = new ListNode(2)
  expect(list2Array(partition(head, 3))).toEqual([1, 2, 2, 4, 3, 5])
})

test('partition', () => {
  const head = new ListNode(2)
  head.next = new ListNode(1)
  expect(list2Array(partition(head, 2))).toEqual([1, 2])
})
