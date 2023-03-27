/*
Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

total1 = 656667
              ^
total2 = 656661
              ^
Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6
*/


//P: one input, a string of characters
//R: return the difference between the sum of the digits created in total1 and the sum of the digits created in total2
//E: 'abc' => 6 (total1: 656667, total2: 656661 (total2 replaces 7s with 1s))
//P: convert the string into an array of chars
  // map a new array for the char code from each char
  // total1 is set to the array, joined and converted to num
  // total2 takes char array and iterates through, looking for char 7 and replacing it with 1 when found, then joined back together and converted to num
  // return total1 - total2



  function calc(x){
    let chars = x.split('');
    let codes = chars.map(char => char.charCodeAt(0));
    let total1Chars = codes.join('').split('')
    let total2Chars = codes.join('').replaceAll('7', '1').split('')
    let total1Nums = total1Chars.map(el => Number(el));
    let total2Nums = total2Chars.map(el => Number(el));
    let total1Sum = total1Nums.reduce((a,b) => a+b);
    let total2Sum = total2Nums.reduce((a,b) => a+b);
    
    
    return total1Sum - total2Sum
  }