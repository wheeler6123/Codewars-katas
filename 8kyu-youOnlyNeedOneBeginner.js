/*You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.*/

//P: input will be one array and one value, array can contain numbers or strings and value can be either
//R: boolean value for whether or not value is contained in the array
//E: [66,101], 66 - should return true as 66 is in the array
  //['t', 'e', 's', 't'], 'e' - should return true as 'e' is in the array
//P: function(arr,val){
  //check if val is in arr
  //return true or false
//}

const check = (arr,val) => arr.includes(val)