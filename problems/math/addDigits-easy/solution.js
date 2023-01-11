/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  let result = 0
  let current = num
  while(current>0){
    let target = current%10
    result+=target
    current = (current-target)/10
  }
  if(result>9){
    return addDigits(result)
  }
  return result
};

module.exports = {
  addDigits
};