// Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.

// Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."

// [01]
// 02 [03]
// 04 05 [06]
// 07 08 09 [10]
// 11 12 13 14 [15]
// 16 17 18 19 20 [21]
// e.g. If 4 is given: 1 + 3 + 6 + 10 = 20.

// Triangular Numbers cannot be negative so return 0 if a negative number is given.

// P: one input, an integer, representing the number of digits in a series of triangular numbers
// R: return an integer, representing the value of the sum of the triangular numbers contained in the sequence of specified input length
// E: 4 => 20 (1+3+6+10)
//    6 => 56 (1+3+6+10+15+21)
// P: the input value will be the length of an array to be populated. If the input length is less than or equal to 0, return 0
//    for the given input length, populate an array of triangle numbers in sequence
//    return the sum of the populated array, using reduce method

function sumTriangularNumbers(n) {
    if(n < 1) return 0;
    if(n == 1) return 1;
    let triangleArr = [1];
    for(let i = 2; i < n+1; i++){
      let last = triangleArr[triangleArr.length - 1];
      triangleArr.push(i + last);
    }
    
    return triangleArr.reduce((a,c) => a + c, 0);
  }