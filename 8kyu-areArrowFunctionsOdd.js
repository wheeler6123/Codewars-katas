// Time to test your basic knowledge in functions! Return the odds from a list:

// [1, 2, 3, 4, 5]  -->  [1, 3, 5]
// [2, 4, 6]        -->  []

// P: one input, an array. Array can be empty, but generally will contain a set of positive integers
// R: program should return an array containing only the odd integers from the given input array
// E: [] => [] (empty array should return an empty array)
//    [2,4,6] => [] 
//    [1,2,3,4,5,6] => [1,3,5]
// P: return the input array using the filter method to select only the odd vals

const odds = values => values.filter(val => val%2 == 1);