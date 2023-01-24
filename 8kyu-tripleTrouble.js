/* 
Triple Trouble
Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length.
*/




//P: three inputs, all strings of the same length
//R: return a single string comprised of each letter in each input added in iterative order
//E: 'aa', 'bb', 'cc' => 'abcabc'
  // 'Sea', 'urn', 'pms' => 'Supermans'
//P: first split each word into chars
  // iterate through each array, adding letter to string before moving to next index and adding the next letter from each array
  // return the final string



  function tripleTrouble(one, two, three){
    let oneChars = one.split('')
    let twoChars = two.split('')
    let threeChars = three.split('')
    
    let result = '';
    
    for(let i = 0; i < oneChars.length; i++){
      result += oneChars[i]
      result += twoChars[i]
      result += threeChars[i]
    }
}