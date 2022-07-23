/*This kata is from check py.checkio.org

You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

Let's look at a few examples:

array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.*/



//P: two inputs, one array of positive integers and one non-negative integer N
//R: return the Nth power of the Nth element in the array. If there isn't an Nth element, return -1
//E: [1,2,3,4] N = 2 => 9 (3^2)
     // [1,2,3] N = 3 => -1 (there is no element in the 3rd index)
//P: function (a,n){
  // create var to hold result
  // check for existence of Nth index, if not in array return -1
  // if there is an Nth index, multiply its value to the Nth power set result to var
  // return var
//}



function index(array, n){
    let result = 0;
    if ((array.length -1) < n){
      result = -1;
    }else {
      result = Math.pow(array[n], n)
    }
    return result;
  }