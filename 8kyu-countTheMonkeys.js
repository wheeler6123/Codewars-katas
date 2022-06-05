/*You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

For example(Input --> Output):

10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 1 --> [1]*/


//P: input will be an integer greater than 0
//R: array counting monkeys by 1 up to input number of monkeys
//E: 5 => [1,2,3,4,5]
  //1 => [1]
//P: function(monkeys){
  //return array filled with count incremented by 1 on each loop, up to number of monkeys
//}

function monkeyCount(monkeys){
    let count = [];
    for(let i = 1; i <= monkeys; i++){
      count.push(i)
    }
    return count;
  }