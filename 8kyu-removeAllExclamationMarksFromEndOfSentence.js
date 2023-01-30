/* 
Description:
Remove all exclamation marks from the end of sentence.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
*/



//P: one input, a string
//R: return the string, ensuring any exclamation points at the end of the string have been removed
//E: 'Hi!' => 'Hi'
  // 'Hi!!!' => 'Hi'
  // '!Hi' => '!Hi'
//P: split the input string into an array of chars
  // check the last element in array, see if it's an exclamation point
  // if it is, pop it off and check again, continuing until it is not an exclamation point
  // return the chars joined back together once it does not end with !



  function remove (string) {  
    let chars = string.split('')
    if(chars[chars.length - 1] !== '!'){
      return string;
    }else{
      while(chars[chars.length -1] === '!'){
        chars.pop()
      }return chars.join('')
    }
  }