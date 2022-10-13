/*Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.*/


//P: input will be a string of words, never empty and no need to account for different data types
//R: return an integer for the length of the shortest word in the string
//E: "bitcoin take over the world maybe who knows perhaps" => 3
  // "turns out random test cases are easier than writing out basic ones" => 3
  // "Let's travel abroad shall we" => 2
//P: declare var to hold array of input string split into individual words
  // declare var to hold shortest element found
  // use a for loop to iterate through array, assigning the shortest element to the var above
  // return length of var holding shortest el

  function findShort(s){
    let arr = s.split(' ');
    let short = arr[0];
    for (let i = 0; i < arr.length; i++){
      if (arr[i].length < short.length){
        short = arr[i];
      }
    }return short.length;
  }