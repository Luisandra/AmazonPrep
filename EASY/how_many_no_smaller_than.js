// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
//
// Return the answer in an array.
/**
 * @param {number[]} nums
 * @return {number[]}
 */

const a = [8,1,2,2,3] //output [4,0,1,1,3]
const b = [6,5,4,8] //Output: [2,1,0,3]
var smallerNumbersThanCurrent = function(nums) {
    //create result arr
    let output = []
    //loop for comparison var
    for(let i=0; i<nums.length ; i++) {
        //create counter var and set to 0
        let count =0
        //second loop to make comparison
        for(let j = 0; j<nums.length; j++){
            //check indexes are not the same - if yes, iterate
            if(i!=j){
                //compare
                if(nums[i]>nums[j]){
                    count++
                }
            }
        }
        output.push(count)
    }
    return output
};
smallerNumbersThanCurrent(b)