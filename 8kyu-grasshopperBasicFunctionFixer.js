/*Fix the function
I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.

Can you help me fix the function?*/


//P: input takes in an integer, a broken function is provided as a starting base
//R: fix the broken function provided to return the correct result, adding 5 to the input 
//E: 5 => 10
//P: the provided broken function is 
  //function addFive(num) {
    // var total = num + 5
    // return num
  //}


  function addFive(num) {
    return num += 5
  }