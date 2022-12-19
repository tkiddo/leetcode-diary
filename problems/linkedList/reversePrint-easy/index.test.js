const { reversePrint } = require('./solution')
const ListNode = require('../ListNode')

test('Example 1', () => {
  const head = new ListNode(1)
  head.next = new ListNode(3)
  head.next.next = new ListNode(2)

  const expected = [2, 3, 1]
  const received = reversePrint(head)
  expect(received).toEqual(expected)
})
