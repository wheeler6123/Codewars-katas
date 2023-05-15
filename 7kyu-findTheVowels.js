/*
We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
NOTES
Vowels in this context refers to: a e i o u y (including upper case)
This is indexed from [1..n] (not zero indexed!)
*/


//P: one input, a string containing letters
//R: return an array containing the indices of any vowels in the input word, NOT ZERO INDEXED
//E: 'mmmm' => []
  // 'super' => [2,4]
//P: convert the string to all lowercase to avoid any case issues, then split the string into array of chars
  // declare a results array to hold indices of vowels
  // iterate through array of chars and check each for vowel, if it is, push the i for that char to the results arr
  // return arr



  function vowelIndices(word){
    let charsArr = word.toLowerCase().split('');
    let result = [];
    let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    
    for(let i = 0; i<charsArr.length; i++){
      let char = charsArr[i];
      if(vowels.includes(char)){
        result.push(i+1);
      }
    }  
    return result;
  }