/*
In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
More examples in the test cases.

Good luck!
*/


//P: one input, a string that could be empty or contain any mix of uppercase letters, lowercase letters, numbers or special chars
//R: return an array of 4 integers, counting occurrences of [uppercase, lowercase, nums, spec chars]
//E: '' => [0,0,0,0]
  // 'aAbBcC' => [3,3,0,0]
  // 'Codewars@codewars123.com' => [1,18,3,2]
//P: create a counter var for each element type
  // split the string into chars arr
  // iterate over chars check char code and incrementing appropriate counter var
  // return counter vars in an array


  function solve(s){
    let up = 0;
    let down = 0;
    let num = 0;
    let spec = 0;
    let chars = s.split('');
    for(let i=0; i<chars.length; i++){
      let char = chars[i];
      let charCode = char.charCodeAt(0);
      if(charCode > 47 && charCode <58){
        num++;
      }else if(charCode > 64 && charCode < 91){
        up++;
      }else if(charCode > 96 && charCode < 123){
        down++;
      }else{
        spec++;
      }
    }
    return [up,down,num,spec];
  }