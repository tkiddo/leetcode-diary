const { ListNode, addTwoNumbers } = require('./solution')

test('Example 1', () => {
  const l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
  const l2 = new ListNode(5, new ListNode(6, new ListNode(4)))
  const output = new ListNode(7, new ListNode(0, new ListNode(8)))

  expect(addTwoNumbers(l1, l2)).toEqual(output)
})
