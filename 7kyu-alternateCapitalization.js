/*Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!*/


//P: one input, a string of lowercase letters
//R: return an array containing two strings, one with all even indices capitalized and one with all odd indices capitalized
//E: "abcdef" => ['AbCdEf', 'aBcDeF']
//P: declare a var for empty array to return the result
  // declare a function to turn all even indices to caps, push to results array
  // declare function to turn all odd indices to caps, push to results array
  // return results array 


  function capitalize(s){
    let results = [];
    let evenStr = s.split('');
    let oddStr = s.split('');
    evenStr.forEach((el, i) => {
      if(i%2===0){
        evenStr[i] = el.toUpperCase()
      }
    })
    oddStr.forEach((el, i) =>{
      if(i%2===1){
        oddStr[i] = el.toUpperCase()
      }
    })
    results.push(evenStr.join(''))
    results.push(oddStr.join(''))
    return results;
  }