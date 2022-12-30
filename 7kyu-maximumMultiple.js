/*
Task
Given a Divisor and a Bound , Find the largest integer N , Such That ,

Conditions :
N is divisible by divisor

N is less than or equal to bound

N is greater than 0.

Notes
The parameters (divisor, bound) passed to the function are only positive values .
It's guaranteed that a divisor is Found .
Input >> Output Examples
maxMultiple (2,7) ==> return (6)
Explanation:
(6) is divisible by (2) , (6) is less than or equal to bound (7) , and (6) is > 0 .

maxMultiple (10,50)  ==> return (50)
Explanation:
(50) is divisible by (10) , (50) is less than or equal to bound (50) , and (50) is > 0 .*

maxMultiple (37,200) ==> return (185)
Explanation:
(185) is divisible by (37) , (185) is less than or equal to bound (200) , and (185) is > 0 .
*/



//P: two inputs, both positive integers, first being the divisor and second being the upper limit
//R: return the largest number (up to and including the upper limit) that is divisible by the divisor
//E: (2,7) => 6
  // (10,50) => 50
  // (37, 200) => 185
//P: use a reverse for-loop to start at the upper max, then iterate through until dividing by the divisor returns a mod 0


function maxMultiple(divisor, bound){
    for(let i = bound; i > 0; i--){
      if(i % divisor === 0){
        return i
      }
    }
  }