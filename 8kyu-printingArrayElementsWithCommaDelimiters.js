/* 
Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a"
*/




//P: one input, an array of elements
//R: return the elements in a single string separated by commas, in the same order as the input array
//E: ['h', 'o', 'l', 'a'] => 'h,o,l,a'
//P: return the array joined with a comma separating the elements


const printArray = arr => arr.join(',')