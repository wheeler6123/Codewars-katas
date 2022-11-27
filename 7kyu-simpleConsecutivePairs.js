/*In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:

pairs([1,2,5,8,-4,-3,7,6,5]) = 3
The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
--the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
--the second pair is (5,8) and are not consecutive
--the third pair is (-4,-3), consecutive. Count = 2
--the fourth pair is (7,6), also consecutive. Count = 3. 
--the last digit has no pair, so we ignore.
More examples in the test cases.

Good luck!*/


//P: one input, an array of integers that can be pos, neg or 0
//R: return the number of pairs in the input arr that contain consecutive integers
//E: [1,2,5,8,-4,-3,7,6,5] => 3 (pairs are (1,2), (5,8), (-4,-3), (7,6) (5) with (1,2), (-4,-3), and (7,6) containing consecutives)
//P: declare a var to hold the counter
  // use a for loop to iterate over each pair, checking the pair for consecutive numbers and increasing counter by 1 if so
  // return counter value


  function pairs(ar){
    let count = 0;
     for(let i=0; i<ar.length; i+=2){
       if(ar[i] === ar[i+1]+1 || ar[i] === ar[i+1]-1) count+=1
     }return count;
   };