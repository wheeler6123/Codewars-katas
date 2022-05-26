/*Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.*/



//P: Input will be array of numbers, may be empty
//R: average of the numbers in the input, if empty should return 0
//E: [1,1,1] returns 1
  //[1,2,3] returns 2
  //[] returns 0
//P: function(arr){
  //declare variable to hold total sum value
  //declare variable to hold average
  //check for empty array, if emtpty return 0
  //set total sum value to reduce array and add each element
  //divide total sum value by number of elements in array, set value for variable average
  //return average
//}

function find_average(arr){
    let totalSum = 0;
    let average = 0;
    if(arr.length === 0){
      return 0;
    }else{
    totalSum = arr.reduce((a,c)=>a+c, 0);
    average = totalSum/arr.length;
    return average;
    }
  }