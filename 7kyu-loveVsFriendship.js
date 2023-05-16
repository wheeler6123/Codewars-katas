/*
If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice as strong as love :-)

Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

The input will always be made of only lowercase letters and will never be empty.
*/


//P: one input, a string containing a word comprised entirely of lowercase letters
//R: return a score for the input word, using a a1z26 scale for each letter
//E: 'love' => 54
  // 'friendship' => 108
//P: since all letters will be lowercase, and lowercase letters run 97-122, take each letters charcode and subtract 96 for it's score
  // add the letters and return the sum


  function wordsToMarks(string){
    let scores = [];
    
    for(let i = 0; i < string.length; i++){
      let val = string.charCodeAt(i)-96;
      scores.push(val);
    }
    return scores.reduce((a,c) => a+c, 0)
  }