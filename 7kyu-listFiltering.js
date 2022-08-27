/*n this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]*/


//P: input will be an array containing both non-negative integers and strings
//R: return an array with all of the strings removed from original input
//E: filter_list([1,2,'a','b']) => [1,2]
  // filter_list([1,'a','b',0,15]) => [1,0,15]
  // filter_list([1,2,'aasf','1','123',123]) => [1,2,123]
//P: use filter to remove any elements with type of string

const filter_list = a => a.filter((el) => typeof (el) != 'string')