// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.
//
// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
let Input: J = "aA", S = "aAAbbbb"
var numJewelsInStones = function(J, S) {
    //create var to count matches
    let count = 0
    //loop through jewels
    for (ltrJ of J){
        //loop through stones
        for (ltrS of S){
            if (ltrJ === ltrS){
                count++
            }
        }
    }
    return count;
};
numJewelsInStones(J, S)