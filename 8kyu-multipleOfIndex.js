/* 
Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

Some cases:
[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

[68, -1, 1, -7, 10, 10] => [-1, 10]

[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]
*/



//P: one input, an array of integers
//R: return an array containing only elements in the input array that are multiples of their own index
//E: [22,-6,32,82,9,25] => [-6,32,25]
//P: filter the array so that it only retains elements where the element modulo it's index position is equal to 0


const multipleOfIndex = arr => arr.filter((el, i) => el % i === 0)