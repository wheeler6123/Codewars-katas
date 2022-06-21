/*You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.*/


//P: input will always be a string where the first character is an integer 0-9 representing age
//R: return the numerical age from the string
//E: '4 years old' => 4
//P: function getAge (age){
  //return age integer from string
//}

const getAge = str => parseInt(str)