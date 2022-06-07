/*Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!*/


//P: input will be array consisting of multiple strings, array will never be empty
//R: return array of strings keeping first element and removing every other thereafter
//E:["Keep", "Remove", "Keep", "Remove", "Keep", ...] => ["Keep", "Keep", "Keep", ...]
//P: function (arr){
  //map new array removing odd numbered elements, return it
//}

const removeEveryOther = arr => arr.filter((el,ind) => ind % 2 === 0)