/*
Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

Only numbers without decimals like 4 or 4.0 can be even.

The input is a sequence of numbers: integers and/or floats.

Examples
[4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
[]                               -->  0
*/


//P: one param, an array of numbers that may include integers and/or floats
//R: return the sum of only the even numbers in the array, for this scenario only whole nums can be even
//E: [1,2,3,4,5,6] => 12
//P: filter input array leaving only even integers, then reduce and return sum


const sumEvenNumbers = input => input.filter(num => num%2===0).reduce((a,c) => a+c, 0)