const {majorityElement} = require('./solution')

test('majorityElement test 0', () => {
    var nums = [3,2,3];
    var result = 3;
    expect(majorityElement(nums)).toEqual(result);
});