/* 
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/



//P: one input, a string that my be of varying lengths, including empty
//R: return the string converted to proper camel casing, using Pascal case if the input capitalized the first word
//E: 'the-stealth-warrior' => 'theStealthWarrior'
  // 'The_Stealth_Warrior' => 'TheStealthWarrior'
//P: first, check to make sure the string isn't not empty, if it is, return an empty string
  // if not empty, can use two split/join pairs in conjunction to get rid of the dashes or underscores
  // then, just need to capitalize the appropriate letters for the string, join it back together, and return

  function capitalize(text){
    let chars = text.split('')
    let firstLetter = chars[0]
    let wordTail = chars.slice(1).join('')
    return `${firstLetter.toUpperCase()}${wordTail}`
  }
  
  function toCamelCase(str){
    if(!str.length){
      return '';
    }
    
    let words = str.replaceAll(/\-|\_/g, ' ').split(' ')
    
    const firstWord = words.shift()
    
    const remainingWords = words.map(word => capitalize(word)).join('')
    
    return `${firstWord}${remainingWords}`
    
  }