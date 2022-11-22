/*Oh no!
Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

You need to cast the whole array to the correct type.

Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

ie:["1", "2", "3"] to [1, 2, 3]

Note that you can receive floats as well.*/


//P: one input, an array containing a set of integers and/or floats represented with strings
//R: return an array with all of the input integers/floats in Number type
//E: ['1.1', '2.2', '3.3'] => [1.1, 2.2, 3.3]
//P: use the map method and the Number function to convert the input array from strings to nums

const toNumberArray = stringArr => stringArr.map(s => Number(s))