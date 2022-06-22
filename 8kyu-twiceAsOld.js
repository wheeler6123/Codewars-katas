/*Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).*/



//P: input will be 2 integers, one for father's age and one for son's age
//R: return number of years until father is twice son's age or how many years ago he was twice son's age
//E: (36,7) => 22
  //(55,30) => 5
//P: function (f,s){
  //check 2s - f
  //return remainder as positive integer
//}

const twiceAsOld = (f,s) => Math.abs(2*s - f)