/*It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.*/


//P: input will be array of integers and will never be empty
//R: return the average, rounded down to nearest integer
//E: [2,2,2,2] => 2
    //[1,2,3,4,5] => 3
//P: function(arr){
  //sum all integers in array
  //divide sum by number of elements in array
  //round quotient down and return
//}

function getAverage(arr){
    let sum = arr.reduce((a,c)=>a+c,0);
    return Math.floor(sum/arr.length);  
  }