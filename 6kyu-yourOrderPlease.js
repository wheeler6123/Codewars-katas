/* 
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/


//P: one input, a string that will either be empty or contain words that also contain a unique number 1-9 in each word
//R: return the string, puttin the words in order by the number contained within each word
//E: "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
  // "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
  // ""  -->  ""
//P: first check for empty string, if empty, return empty string
  // if not empty, split words into an array
  // set use the words array length as the number of words, to set the upper limit of the order
  // use a double for-loop to iterate through the word order up to the max word count, and on the inner for loop, check each word in the array to see if it contains the number for the current word position
  // if it does, add the word as is to a var that will hold the string to return
  // after placing all the words into the proper spot, return the ordered string trimmed of any whitespace



  function order(words){
    let orderedStr = '';
    if(!words.length > 1){return orderedStr}
    
    let wordsArr = words.split(' ')
    
    let maxWordCount = wordsArr.length
    
    for(let i = 1; i <= maxWordCount; i++){
      for(let y = 0; y < wordsArr.length; y++){
      if(wordsArr[y].includes(i)){
          orderedStr = orderedStr.concat(' ', wordsArr[y])
        }
      }
    }
    return orderedStr.trim()
  }