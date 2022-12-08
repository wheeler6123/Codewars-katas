/*If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.*/


//P: one input, an integer can be pos or neg
//R: return an integer, the sum of all multiples of 3 and 5 below the input, n. If n is negative, return 0
//E: n=10 => 23 (3,5,6,9)
//P: declare an empty array to hold the nums below n that are multiples of 3 or 5
  // use for loop to iterate through nums 0 up to n, pushing multiples of 3 or 5 to array
  // remove dupes by creating new set from array of mults, then return sum by reducing set

  function solution(number){
    let multiples =[];
    
    for(let i = 0; i<number; i++){
      if(i%3===0 || i%5===0){
        multiples.push(i);
      }
    }
    
    return [...new Set(multiples)].reduce((a,c)=>a+c,0);
    
  }