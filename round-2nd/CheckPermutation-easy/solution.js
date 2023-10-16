/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// const CheckPermutation = function (s1, s2) {
//   if (s1.length !== s2.length) {
//     return false
//   }
//   const count1 = {},
//     count2 = {}
//   for (let i = 0; i < s1.length; i++) {
//     if (count1[s1[i]]) {
//       count1[s1[i]] = count1[s1[i]] + 1
//     } else {
//       count1[s1[i]] = 1
//     }

//     if (count2[s2[i]]) {
//       count2[s2[i]] = count2[s2[i]] + 1
//     } else {
//       count2[s2[i]] = 1
//     }
//   }

//   const keys1 = Object.keys(count1)
//   const keys2 = Object.keys(count2)
//   if (keys1.length !== keys2.length) {
//     return false
//   }

//   for (let i = 0; i < keys1.length; i++) {
//     if (count1[keys1[i]] !== count2[keys1[i]]) {
//       return false
//     }
//   }
//   return true
// }

// const CheckPermutation = (s1, s2) => {
//   return (
//     s1.length === s2.length && [...s1].sort().join() === [...s2].sort().join()
//   )
// }

const CheckPermutation = (s1, s2) => {
  if (s1.length !== s2.length) {
    return false
  }
  const count = {}
  for (let i = 0; i < s1.length; i++) {
    if (count[s1[i]]) {
      count[s1[i]] = count[s1[i]] + 1
    } else {
      count[s1[i]] = 1
    }
  }

  for (let i = 0; i < s2.length; i++) {
    if (count[s2[i]]) {
      count[s2[i]] = count[s2[i]] - 1
    } else {
      return false
    }
  }
  return true
}

module.exports = CheckPermutation
