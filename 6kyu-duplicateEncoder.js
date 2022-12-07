/*The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!*/


//P: one input, a string, may contain english letters or other characters
//R: return a string comprised only of parentheses, replacing each char in the original string with an opening parentheses if that char occurs once in the string or a closing parentheses if it occurs multiple times
//E: 'din' => '((('
  // 'recede' => '()()()'
  // '(( @' => '))((' *note the space is considered a char
//P: to preserve the spaces, first use a replaceAll function to replace the empty spaces in string with hyphens
  // split converted string into char array
  // separate chars into two sets, one for dupes and one for singles
  // loop back through the original string input and generate the proper return string

  function duplicateEncode(word){
    let dashSpaces = word.replace(/\s+/g,'-').toLowerCase();
    let dupeChars = dashSpaces.split('').filter((char,index) => dashSpaces.indexOf(char) != index);
    let singleChars = dashSpaces.split('').filter((char,index) => dashSpaces.indexOf(char) === index && !dupeChars.includes(char));
    
    let result = '';
     
    for(let char of dashSpaces){
      if(singleChars.includes(char)){
        result += '(';
      }else if(dupeChars.includes(char)){
        result += ')';
      }
    }
    return result;
}