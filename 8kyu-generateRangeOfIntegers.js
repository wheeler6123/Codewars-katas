/*Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

Task
Implement a function named

generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
generateRange(1, 10, 3) // should return array of [1,4,7,10]
Note
min < max
step > 0
the range does not HAVE to include max (depending on the step)*/


//P: three inputs, a min, max, and step. Min will always be less than max, step will always be > 0
//R: return an array containing the range from min to max using step as the increment
//E: 2, 10, 2 => 2,4,6,8,10
//P: use from method for array constructor to create a new array with a length of ((stop-start)/step)+1 and increment each index using start as the first and adding i*step for each increment


const generateRange = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));