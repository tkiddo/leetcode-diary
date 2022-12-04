const { ListNode, mergeTwoLists } = require('./solution')

describe('mergeTwoLists', () => {
  it('should return a list with the values of both lists in ascending order', () => {
    const list1 = new ListNode(1, new ListNode(2, new ListNode(4)))
    const list2 = new ListNode(1, new ListNode(3, new ListNode(4)))
    const expected = new ListNode(
      1,
      new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4)))))
    )
    const actual = mergeTwoLists(list1, list2)
    expect(actual).toEqual(expected)
  })
  it('should return []', () => {
    const list1 = null
    const list2 = null
    expect(mergeTwoLists(list1, list2)).toEqual(null)
  })
  it('should return [1]', () => {
    const list1 = new ListNode(1, null)
    const list2 = null
    expect(mergeTwoLists(list1, list2)).toEqual(list1)
  })
})
