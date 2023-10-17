/**
 * @param {string} S
 * @param {number} length
 * @return {string}
 */
const replaceSpaces = function (S, length) {
  return S.slice(0, length).replace(/\s/g, '%20')
}

module.exports = replaceSpaces
