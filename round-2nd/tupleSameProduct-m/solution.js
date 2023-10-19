/**
 * @param {number[]} nums
 * @return {number}
 */
// var tupleSameProduct = function (nums) {
//   const pMap = {}
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (i !== j) {
//         const product = nums[i] * nums[j]
//         if (pMap[product]) {
//           pMap[product].push([nums[i], nums[j]])
//         } else {
//           pMap[product] = []
//           pMap[product].push([nums[i], nums[j]])
//         }
//       }
//     }
//   }
//   let count = 0
//   for (let key in pMap) {
//     if (pMap[key].length > 2) {
//       const target = pMap[key]
//       for (let i = 0; i < target.length; i++) {
//         for (let j = 0; j < target.length; j++) {
//           if (i !== j) {
//             const [a, b] = target[i],
//               [a1, b1] = target[j]
//             if (a !== b1 && b !== a1) {
//               count++
//             }
//           }
//         }
//       }
//     }
//   }
//   return count
// }

// var tupleSameProduct = function (nums) {
//   const pMap = {}
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (i !== j) {
//         const product = nums[i] * nums[j]
//         if (pMap[product]) {
//           pMap[product]++
//         } else {
//           pMap[product] = 1
//         }
//       }
//     }
//   }
//   let count = 0
//   for (let key in pMap) {
//     if (pMap[key] > 2) {
//       count += pMap[key] * (pMap[key] - 2)
//     }
//   }
//   return count
// }

var tupleSameProduct = function (nums) {
  const pMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const product = nums[i] * nums[j]
      if (pMap.get(product)) {
        pMap.set(product, pMap.get(product) + 1)
      } else {
        pMap.set(product, 1)
      }
    }
  }
  let count = 0
  for (const value of pMap.values()) {
    count += value * (value - 1) * 4
  }
  return count
}

module.exports = tupleSameProduct
