/*Your job is to figure out the index of which vowel is missing from a given string:

A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

Examples
"John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
"Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"*/



//P: one input, a string containing a sentence that will be missing one vowel from all of the places it should have been
//R: return the corresponding value of 0-4 for AEIOU for the vowel missing
//E: 'John Doe hs seven red pples under his bsket' => 0 (missing 'a')
//P: use if/else to check if the string includes each vowel, if it does not, return the corresponding index

let vowels = ['a', 'e', 'i', 'o', 'u']

function absentVowel(x){
  for(let i = 0; i<vowels.length; i++){
    if(!x.includes(vowels[i])){
      return i;
    }
  }
}