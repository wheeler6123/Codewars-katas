/*Complete the solution so that it reverses all of the words within the string passed in.

Example:

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"*/

//P: input will always be a string, may contain letters and special characters
//R: return the string with words in reversed order
//E: 'Hello world' returns 'world! Hello'
  //'row row row your boat' returns 'boat your row row row'
//P: function (str){
  //declare variable to hold str split words reverse and join words back together
  //return variable
//}

const reverseWords = str => str.split(' ').reverse().join(' ')