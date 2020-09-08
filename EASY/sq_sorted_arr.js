// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

/**
 * @param {number[]} A
 * @return {number[]}
 */
const a = [-4,-1,0,3,10] //output [0,1,9,16,100]
const b = [-7,-3,2,3,11] //output [4,9,9,49,121]
var sortedSquares = function(A) {
    //use map to square each val
    A = A.map(n=>{ return Math.pow(n,2)})
    //then .sort((a,b)=>a-b) <-this is ascending
    A.sort((a,b)=>a-b)
    return A
};
sortedSquares(b)