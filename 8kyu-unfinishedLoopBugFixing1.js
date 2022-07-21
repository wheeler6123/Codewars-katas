/*Unfinished Loop - Bug Fixing #1
Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

*/


//P: a function with an error causing an infinite loop
//R: the function corrected to remove the infinite loop
/*function createArray(number){
  var newArray = [];
  
  for(var counter = 1; counter <= number;){
    newArray.push(counter);
  }
  
  return newArray;
}*/

function createArray(number){
    var newArray = [];
    
    for(var counter = 1; counter <= number; counter++){
      newArray.push(counter);
    }
    
    return newArray;
  }