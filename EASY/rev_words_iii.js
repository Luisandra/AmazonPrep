// Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

/**
 * @param {string} s
 * @return {string}
 */
const a = "Let's take LeetCode contest"
//output "s'teL ekat edoCteeL tsetnoc"
var reverseWords = function(s) {
    //create arr to hold output
    let reversed=[]
    //separate by space
    s = s.split(" ")
    //loop through arr
    for(word of s){
        //split into char, reverse, then rejoin
        word = word.split('').reverse().join('')
        //push into output arr
        reversed.push(word)
    }
    //join output arr into str
    reversed = reversed.join(' ')
    return reversed

};
reverseWords(a)