const { ListNode, getIntersectionNode } = require('./solution.js')

/**
 * 输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
输出：Intersected at '8'
解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。
从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。
在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
 */

test('示例 1', () => {
  const headA = new ListNode(4)
  headA.next = new ListNode(1)
  headA.next.next = new ListNode(8)
  headA.next.next.next = new ListNode(4)
  headA.next.next.next.next = new ListNode(5)
  const headB = new ListNode(5)
  headB.next = new ListNode(0)
  headB.next.next = new ListNode(1)
  headB.next.next.next = headA.next.next
  headB.next.next.next.next = headA.next.next.next
  expect(getIntersectionNode(headA, headB)).toBe(headA.next.next)
})
