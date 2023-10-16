/**
 * @param {string} astr
 * @return {boolean}
 */
// const isUnique = function (astr) {
//   const letter = {}
//   for(let i =0;i<astr.length;i++){
//     if(letter[astr[i]]){
//       return false
//     }else{
//       letter[astr[i]] = true
//     }
//   }
//   return true
// }

// 位运算解法
const isUnique = function (astr) {
  let mark = 0
  for (let i = 0; i < astr.length; i++) {
    const moveBit = astr.charCodeAt(i) - 'a'.charCodeAt(0)
    if ((mark & (1 << moveBit)) !== 0) {
      return false
    } else {
      mark |= 1 << moveBit
    }
  }
  return true
}

module.exports = isUnique
