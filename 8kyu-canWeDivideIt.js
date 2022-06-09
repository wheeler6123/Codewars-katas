/*Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

A few cases:


(-12, 2, -6)  ->  true
(-12, 2, -5)  ->  false

(45, 1, 6)    ->  false
(45, 5, 15)   ->  true

(4, 1, 4)     ->  true
(15, -5, 3)   ->  true*/



//P: input will be three integers, can be negative
//R: boolean value for whether or not the first number given is divisible by each of the next two numbers 
//E: (-12, 2, -6)  ->  true
  //(-12, 2, -5)  ->  false
//P: function(num, a, b){
  //check if num is divisible by a and b
  //return true or false
//}

const isDivideBy = (num, a, b) => num % a === 0 && num % b === 0 