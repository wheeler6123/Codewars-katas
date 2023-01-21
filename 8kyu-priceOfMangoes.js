/* 
There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

Examples
mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free
*/


//P: two inputs, both positive integers, first giving number of mangoes bought and second the price per mango
//R: return an integer for the total cost of the mangoes, factoring in getting a free mango for each 2 purchased
//E: 2, 3 => 6 (2x3, didn't take the free)
  // 3, 3 => 6 (2x3, +1 free)
  // 5, 3 => 12 (4x3, +1 free)
//P: first, check to see if the quantity is a multiple of 3, if so use the multiple as the number of free mangoes (i.e. 9 mangoes, 9/3 = 3, 3 free 6 bought)
  // if not a multiple of 3, get the floor of multiple as the free mangoes (i.e. 5 mangoes, 5/3 = 1.7, floor is 1 so that's free, 4 bought)
  // subtract the number of free mangoes from the quantity, then multiply the remaining number of bought mangoes times the price per mango and return the total


  function mango(quantity, price){
    let free = Math.floor(quantity/3)
    let bought = quantity - free
    return bought * price
  }