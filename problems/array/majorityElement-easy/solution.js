/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let votes=0,result=null
  for(let i=0;i<nums.length;i++){
    if(votes===0){
      result=nums[i]
      votes++
      continue
    }
    if(nums[i]===result){
      votes++
    }else{
      votes--
    }
  }
  return result
};

module.exports={
    majorityElement
}