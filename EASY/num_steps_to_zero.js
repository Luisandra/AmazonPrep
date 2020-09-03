// Given a non-negative integer num, return the number of steps to reduce it to zero. If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
//
/**
 * @param {number} num
 * @return {number}
 */
const a = 14 //output6
const b = 8 //output4
var numberOfSteps  = function(num) {
    //create var to count steps
    let steps = 0
    //while loop greater than 0
    while (num>0){
        //check if odd, then -1
        if(num%2!==0){
            num -=1
            steps ++
        } //check if even /2
        else  if (num%2 ===0 ){
            num = num/2
            steps++
        }
    }
    return steps

};
numberOfSteps(b)