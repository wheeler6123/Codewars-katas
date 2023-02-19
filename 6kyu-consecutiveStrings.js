/* 
You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Examples:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

Note
consecutive strings : follow one after another without an interruption
*/



//P: two inputs, first an array containing various strings, second an integer k 
//R: return the first longest string possible consisting of k consecutive strings taken from the array, return empty string if the inputs are not valid
//E: ['tree', 'foling', 'trashy', 'blue', 'abcdef', 'uvwxyz'], 2 => 'folingtrashy' ('folingtrashy' and 'abcdefuvwxyz' are equal in length, but we return the first possible answer if there is a tie)
//P: first, check inputs for validity, if invalid return empty string
  // declare a var to hold current longest string, initialized as first k elements in array joined as a string
  // iterate through array checking k consecutive stings against current longest string, replacing if longer is found
  // return longest string



  function longestConsec(strarr, k) {
    let longestStr = strarr.slice(0,k).join('')
    if(!strarr.length || k > strarr.length || k <= 0){return ''}
    for(let i = 1; i < strarr.length; i++){
      let current = strarr.slice(i,i+k).join('')
      if(current.length > longestStr.length){
        longestStr = current;
      }
    }
    return longestStr
  }