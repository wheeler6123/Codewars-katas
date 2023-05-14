/*
In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

years divisible by 4 are leap years
but years divisible by 100 are not leap years
but years divisible by 400 are leap years
Additional Notes:

Only valid years (positive integers) will be tested, so you don't have to validate them

*/


//P: one input, a 4 digit positive integer representing a year
//R: a boolean value for if the given year is a leap year or not
//E: 1234 => false
  // 1984 => true
  // 2000 => true
  // 2010 => false
//P: implement a chained if/else statement going through the three checks for a leap year


const isLeapYear = year => year%4 !== 0 ? false : year%100!==0 ? true : year%400===0? true : false