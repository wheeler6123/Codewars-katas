/*
Your task is to add up letters to one letter.

The function will be given a variable amount of arguments, each one being a letter to add.

Notes:
Letters will always be lowercase.
Letters can overflow (see second to last example of the description)
If no letters are given, the function should return 'z'
Examples:
addLetters('a', 'b', 'c') = 'f'
addLetters('a', 'b') = 'c'
addLetters('z') = 'z'
addLetters('z', 'a') = 'a'
addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
addLetters() = 'z'
*/


//P: one input, an array usually containing a set of individual lowercase letters. could be empty
//R: return the letter that corresponds to the final sum of the input letters, using a1z26 and rolling over as needed. if empty, return 'z'
//E: 'a', 'b', 'c' => 'f' (1 + 2 + 3 = 6 = f)
  // 'y', 'c', 'b' => 'd' (overflow, 25+3+2 = 30, -26 = 4)
//P: using ascii codes adjusted to fit 1-26, 'add' each letter to get a total sum
  // if sum > 26, divide by 26, take the rounded down result and remove that x 26 from the sum to get the remainder, which will be the letter returned
  // return the correct letter with char code


  function addLetters(...letters) {
    if(!letters.length) return 'z';
    if(letters.length===1) return letters[0];
    
    let charCodes = letters.map(el => el.charCodeAt(el[0])-96);
    let sum = charCodes.reduce((a,b) => a+b);
    
    if(sum <= 26){
      return String.fromCharCode(sum+96)
    }else{
      let multi = Math.floor(sum/26);
      let adjusted = sum - (multi*26) + 96;
      if(adjusted >= 97){
        return String.fromCharCode(adjusted);
      }else{
        return 'z';
      }
    }
  }