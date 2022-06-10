/*It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).*/



//P: input will be one integer and one boolean value
//R: return total compensation based on bonus status (true = 10x salary, false = salary) preceded by british pound sign
//E: (10000, true) => '\u00A3'100000
    //(25000, false) => '\u00A3'25000
//P: function(salary,bonus){
  //check if bonus is true
  //if true, return salary x 10 
  //if false, return salary
//}

const bonusTime = (salary, bonus) => bonus ? '\u00A3' + salary * 10 : '\u00A3' + salary