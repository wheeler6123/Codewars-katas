/*The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly.

Task
Fix the bug so we can all go home early.

Notes
String str will never be null.*/


//P: input will be a string, never null
//R: input string with all '.' replaced with '-'
//E: "one.two.three" => 'one-two-three'
//P: function (str){
  //replace all '.' with '-'
  //return revised string
//}

const replaceDots = str => str.replace(/\./g, '-')