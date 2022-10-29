/*Don't give me five!
In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

Examples:

1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
The result may contain fives. ;-)
The start number will always be smaller than the end number. Both numbers can be also negative!

I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!*/


//P: two inputs, both integers can be positive or negative
//R: return an integer for the number of integers between the two numbers (inclusive of both ends) minus all numbers containing 5
//E: 1,9 => 8 (1,2,3,4,6,7,8,9)
//P: iterate through a for-loop from start to end, checking if the number contains a five
  // if it does, increment a 5s counter
  // in the end, return end - start - fives and add 1 back on to account for final number


  function dontGiveMeFive(start, end){
    let fives = 0;
    for(let i = start; i <= end; i++){
      if(i.toString().includes('5')){
        fives++;
      }
    } return end - start - fives + 1
  }