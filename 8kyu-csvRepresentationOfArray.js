/*Create a function that returns the CSV representation of a two-dimensional numeric array.

Example:

input:
   [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]] 
    
output:
     '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34'
Array's length > 2.*/


//P: input will be array of arrays, with component arrays comprised of integers, input array will contain at least 2 arrays
//R: one continuous string of all numbers in each array
//E: [[ 0, 1, 2, 3, 45 ],
  // [ 10,11,12,13,14 ],
  // [ 20,21,22,23,24 ],
  // [ 30,31,32,33,34 ]
                        //] =>  '0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34'
//P: function (arr){
  //declare variable for csv text
  //concat input arrays into csv text string
  //return csv text
//}

const toCsvText = arr => arr.join('\n')