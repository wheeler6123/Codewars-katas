/*omplete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]
*/



//P: input will be two integers, a and b, where a is less than b
//R: return an array of all of the numbers starting with a and ending with b
//E: 1, 4 => [1,2,3,4]
//P: function(a,b){
 // create var to hold new array
 // use a for loop to iterate through and push numbers to the array
 // return new array
//}


function between(a, b) {
    let nums = [];
    for(let i = a; i <= b; i++){
      nums.push(i);
    }
    return nums;
  }