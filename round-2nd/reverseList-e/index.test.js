const { ListNode, reverseList } = require('./solution')

/**
 * 示例 1：

输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
示例 2：

输入：head = [1,2]
输出：[2,1]
示例 3：

输入：head = []
输出：[]
 */

describe('reverseList', () => {
  test('reverseList', () => {
    const head = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    )
    const result = reverseList(head)
    const resultArr = []
    while (result) {
      resultArr.push(result.val)
      result = result.next
    }
    expect(resultArr).toEqual([5, 4, 3, 2, 1])
  })
})

describe('reverseList', () => {
  test('reverseList', () => {
    const head = new ListNode(1, new ListNode(2))
    const result = reverseList(head)
    const resultArr = []
    while (result) {
      resultArr.push(result.val)
      result = result.next
    }
    expect(resultArr).toEqual([2, 1])
  })
})

describe('reverseList', () => {
  test('reverseList', () => {
    const head = null
    const result = reverseList(head)
    const resultArr = []
    while (result) {
      resultArr.push(result.val)
      result = result.next
    }
    expect(resultArr).toEqual([])
  })
})
