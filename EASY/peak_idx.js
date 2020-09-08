// Given an integer array arr that is guaranteed to be a mountain, return any i

/**
 * @param {number[]} arr
 * @return {number}
 */
const a = [0,1,0] //1
const b = [0,10,5,2] //1
const c = [3,4,5,1] //2
var peakIndexInMountainArray = function(arr) {
    //create nonshallow copy of arr and sort
    let sorted = [...arr].sort((a,b)=>b-a)
    //return the index of the highest val
    return arr.indexOf(sorted[0])
};
peakIndexInMountainArray(c)