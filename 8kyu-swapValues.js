/*I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

Can you figure out what's wrong here?

*/


//P: input will be array containing two elements
//R: return the array with elements swapped order, using the broken function template provided
//E: [1,2] => [2,1];
//P: the provided broken base is: 
  // function swapValues() {
  // var args = Array.prototype.slice.call(arguments);
  // var temp = args[0];
  // args[0] = args[1];
  // args[1] = temp;  
  // }

  function swapValues(arr) {
    return arr.reverse()
}