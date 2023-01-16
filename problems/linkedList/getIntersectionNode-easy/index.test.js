const {ListNode,getIntersectionNode}  =require('./solution')

test('getIntersectionNode', () => {
  const listA = new ListNode(4)
  listA.next = new ListNode(1)
  listA.next.next = new ListNode(8)
  listA.next.next.next = new ListNode(4)
  listA.next.next.next.next = new ListNode(5)

  const listB = new ListNode(5)
  listB.next = new ListNode(0)
  listB.next.next = new ListNode(1)
  listB.next.next.next = listA.next.next
  listB.next.next.next.next = listA.next.next.next
  listB.next.next.next.next.next = listA.next.next.next.next

  expect(getIntersectionNode(listA, listB)).toEqual(listA.next.next)
})