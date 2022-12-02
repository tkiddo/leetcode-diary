const { ListNode, reverseList } = require('./solution')

describe('reverseList', () => {
  it('should reverse a list', () => {
    const list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
    const reversedList = new ListNode(
      5,
      new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(1))))
    )
    expect(reverseList(list)).toEqual(reversedList)
  })
})
