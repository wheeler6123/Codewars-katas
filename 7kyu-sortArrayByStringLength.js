/*Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.*/



//P: one input, an array, containing strings of various unique lengths
//R: return an array, containing the input strings sorted by length from shortest to longest
//E: ['hello', 'sir', 'good', 'afternoon'] => ['sir', 'good', 'hello', 'afternoon']
//P: use sort method to sort elements from shortest to longest

const sortByLength = arr => arr.sort((a,b) => a.length - b.length)