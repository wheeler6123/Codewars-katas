/* 
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/



//P: one input, a string of varying length that will contain words comprised only of lowercase letters
//R: return the word in the string that scores the highest, using a scoring system of a=1 through z=26
//E: 'man i need to a taxi up to ubud' => 'taxi'
  // 'aa b' => 'aa' (if multiple words tie for the high score, return the one that comes first in original string)
  // 'b aa' => 'b' (see above)
//P: declare a var to hold current high score word
  // break string into array of words
  // iterate through array, checking score of each word and replacing the current high word if applicable (ties do not replace)
  // return the word scoring the highest


  const alphaSet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  const charScore = char => alphaSet.indexOf(char) + 1
  
  function high(x){
    let words = x.split(' ')
    let highScore = -1;
    let highWord = '';
    
    for(let i=0; i<words.length; i++){
      let currentWord = words[i]
      let chars = currentWord.split('')
      let currentScore = chars.reduce((a,c) => a + charScore(c), 0)
      if (currentScore > highScore){
        highWord = currentWord;
        highScore = currentScore;
      }
    }
  }