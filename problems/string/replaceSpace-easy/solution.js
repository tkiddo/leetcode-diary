/**
 * @param {string} s
 * @return {string}
 */
const replaceSpace = function (s) {
  const arr = s.split('')
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ' ') {
      arr[i] = '%20'
    }
  }
  return arr.join('')
}

module.exports = {
  replaceSpace,
}
