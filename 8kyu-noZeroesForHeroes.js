/*Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway

*/


//P: input will be an integer
//R: return the integer, removing any 0s from the end and only the end
//E: 1450 -> 145
  // 960000 -> 96
  // 1050 -> 105
  // -1050 -> -105
//P: declare var to hold value of input converted to string 
  // use if/else to check if last index of var is 0
  // with a while loop, continue to remove last index until it is no longer 0
  // convert string back to integer and return


  function noBoringZeros(n) {
    let stringNum = n.toString();
    let lastDigit = stringNum[stringNum.length-1];
    if (lastDigit !== '0'){
        stringNum = stringNum;
      }else {
        while(lastDigit === '0'){
          stringNum = stringNum.slice(0,-1);
          lastDigit = stringNum[stringNum.length-1];
        }
      }return +stringNum;
    }