/*Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!*/

//P: input will be string, can be letters, numbers (pos or neg), or characters
//R: input string, with each character repeated
//E: 'abcd' => 'aabbccdd'
  //'1234' => '11223344'
//P: function(str){
  //declare variable to hold new string
  //set new string value to concat each character in original string twice
  //return new string
//}

function doubleChar(str){
    let doubleStr = '';
    for(let i = 0; i < str.length; i++){
      doubleStr += str[i];
      doubleStr += str[i];
    }
    return doubleStr;
  }