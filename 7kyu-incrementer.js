/*
Given an input of an array of digits, return the array with each digit incremented by its position in the array: the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 ( and not 0 ).

Your result can only contain single digit numbers, so if adding a digit with its position gives you a multiple-digit number, only the last digit of the number should be returned.

Notes:
return an empty array if your array is empty
arrays will only contain numbers so don't worry about checking that
Examples:
[1, 2, 3]  -->  [2, 4, 6]   #  [1+1, 2+2, 3+3]

[4, 6, 9, 1, 3]  -->  [5, 8, 2, 5, 8]  #  [4+1, 6+2, 9+3, 1+4, 3+5]
                                       #  9+3 = 12  -->  2
*/


//P: one input, an array of nums
//R: return an array of nums, where each input num is incremented by its position in the input array. only return single digit nums, so nums greater than 1 digit should only return the last digit
//E: [1,2,3] => [2,4,6]
  // [4, 6, 9, 1, 3] => [5, 8, 2, 5, 8]
//P: create a helper function that takes a multi-digit val, converts it to a string, and returns only the last digit
  // map through initial array, adding the position to each element value
  // then map through that array, check to see if each el is more than 1 digit and if so replacing it with the helper function
  // return final array


  function singleDig(val){
    let string = val.toString();
    return Number(string[string.length-1]);
  }
  
  function incrementer(nums) { 
    let incNums = nums.map((e,i)=> e+(i+1));
    return incNums.map(num => {
      if(num.toString().length>1){
        return singleDig(num);
      }else{
        return num;
      }
    })
  }