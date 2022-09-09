//Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.



//P: input will be a list/array, no indication of the type of elements present, length, or whether or not it can be empty along with a number n 
//R: return a list/array containing the first n elements of the input array
//E: [1,2,3,4,5], 3 => [1,2,3]
//P: cut the array to the desired length of n and return mutated array


function take(arr,n){
    if(arr.length < n){
      return arr;
    }else {
      arr.length = n;
      return arr
    }
  }