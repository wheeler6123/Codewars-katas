/*
Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
Each part will be in a string
Elements of a pair must be in the same order as in the original array.
Examples of returns in different languages:
a = ["az", "toto", "picaro", "zone", "kiwi"] -->
[["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]] 
or
 a = {"az", "toto", "picaro", "zone", "kiwi"} -->
{{"az", "toto picaro zone kiwi"}, {"az toto", "picaro zone kiwi"}, {"az toto picaro", "zone kiwi"}, {"az toto picaro zone", "kiwi"}}
or
a = ["az", "toto", "picaro", "zone", "kiwi"] -->
[("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
or 
a = [|"az", "toto", "picaro", "zone", "kiwi"|] -->
[("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
or
a = ["az", "toto", "picaro", "zone", "kiwi"] -->
"(az, toto picaro zone kiwi)(az toto, picaro zone kiwi)(az toto picaro, zone kiwi)(az toto picaro zone, kiwi)"
Note
You can see other examples for each language in "Your test cases"
*/


//P: one input, an array containing at least two elements
//R: return an array of arrays, with each array comprised of all the ways to split the input array into two parts
//E: ['az', 'toto', 'picaro', 'zone', 'kiwi'] => [['az', 'toto picaro zone kiwi'], ['az toto', 'picaro zone kiwi'], ['az toto picaro', 'zone kiwi'], ['az toto picaro zone', 'kiwi']]
//P: iterate over the input array, splitting the array starting with i = 1
  // for each iteration, push to a results array an array with the joined results of each split array
  // return the final results array

  function partlist(arr) {
    let parts = [];
  
  for(let i = 1; i < arr.length; i++){
    let partA = arr.slice(0,i).join(' ');
    let partB = arr.slice(i).join(' ');
    parts.push([partA, partB]);
  }
  
  return parts;
}