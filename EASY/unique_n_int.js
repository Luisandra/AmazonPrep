// Given an integer n, return any array containing n unique integers such that they add up to 0.
/**
 * @param {number} n
 * @return {number[]}
 */
//get error w/ n=15
const a = 5, b = 4, c= 6, d=15

var sumZero = function(n) {
    //create output arr
    let output = []
    //check for input of 1
    if(n===1){
        return output=[0]
    }
    //check if n multiple of 3 - only way I can think of creating a more random selection of # for array
    else if(n%3===0){
        while(output.length<n) {
            //create random #
            newNum = Math.floor((Math.random() * 100)+1)
            //check w/arr to confirm no duplicates
            if(output.includes(newNum)){
                newNum = Math.floor((Math.random() * 100)+1)
            } //if not already in array continue
            else {
                output.push(newNum)
                //check if odd
                if(newNum%2!=0){
                    let n1 = Math.floor(newNum/2)*-1
                    output.push(n1)
                    let n2 = (newNum+n1)*-1
                    output.push(n2)
                } else {
                    let n3 = (Math.floor(newNum/2)+1)*-1
                    output.push(n3)
                    let n4 = (newNum+n3)*-1
                    output.push(n4)
                }
            }
        }
    }
    else { //only code needed to complete challenge
        if (n%2!=0){
            output.push(0)
        }
        while(output.length<n){
            //create random #
            newNum = Math.floor((Math.random() * 100)+1)
            //check w/arr to confirm no duplicates
            if(output.includes(newNum)){
                newNum = Math.floor((Math.random() * 100)+1)
            } else {
                output.push(newNum)
                output.push((newNum*-1))
            }
        }
    }

    console.log(output)
    return output
};
sumZero(d)