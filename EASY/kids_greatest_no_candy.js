// Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.
//
//     For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
let c1 = [2,3,5,1,3], c2= [4,2,1,1,2];
// c1 Output: [true,true,true,false,true], c2 Output: [true,false,false,false,false]
let x1 =3, x2 = 1;
var kidsWithCandies = function(candies, extraCandies) {
    //create array to hold output (t/f)
    let results = [];
    //determine largest number
    const max = Math.max(...candies)
    //compare and save output
    for(el of candies){
        results.push(el + extraCandies>=max)
    }
    return results

};
kidsWithCandies(c2, x2)