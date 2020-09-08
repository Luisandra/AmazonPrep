// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.
//
//     After doing so, return the array.

/**
 * @param {number[]} arr
 * @return {number[]}
 */
const a = [17,18,5,4,6,1] //output [18,6,6,6,1,-1]


var replaceElements = function(arr) {
    //create arr for output
    let newArr = []
    //create var to hold highest val
    let max
    //loop through arr, starting at index 1
    outer_loop:
    for(let i=1; i<arr.length; i++){
        //set val of max to first val
        max = arr[i]
        //inner loop for comparison
        inner_loop:
        for(let j = i+1; j<arr.length; j++){
            //if stmt for comparison
            if(max<arr[j]){
                max=arr[j]
            }
        }
        newArr.push(max)
    }
    //add -1 to the end
    newArr.push(-1)
    console.log(newArr)
    return newArr
};
replaceElements(a)