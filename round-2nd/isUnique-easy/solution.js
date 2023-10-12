/**
 * @param {string} astr
 * @return {boolean}
 */
const isUnique = function (astr) {
  const letter = {}
  for(let i =0;i<astr.length;i++){
    if(letter[astr[i]]){
      return false
    }else{
      letter[astr[i]] = true
    }
  }
  return true
}

module.exports = isUnique
