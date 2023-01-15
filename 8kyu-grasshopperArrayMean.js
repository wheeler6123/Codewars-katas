/* 
Find Mean
Find the mean (average) of a list of numbers in an array.

Information
To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

For an example list of 1, 3, 5, 7

1. Add all of the numbers

1+3+5+7 = 16
2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

16/4 = 4
3. The mean (or average) of this list is 4
*/



//P: one input, an array of integers 
//R: return the average of the numbers in the array
//E: [1] => 1
 // [1,3,5,7] => 4 (16/4)
//P: use reduce to determine sum, then divide by length for the average, return


const findAverage = nums => nums.reduce((a,c) => a + c, 0)/nums.length