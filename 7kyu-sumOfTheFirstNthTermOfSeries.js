


//P: input will be a non-negative integer, n
//R: given the series in the prompt, return the sum of series up to the nth term. Return as a string limited to 2 decimal places
//E: 1 --> 1 --> "1.00"
  // 2 --> 1 + 1/4 --> "1.25"
  // 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
//P: declare var for result
  // declare var for increasing denominator
  // use a for loop to add up to the nth parameter
  // return result using toFixed method to set string type and significant digits


  function SeriesSum(n){
    let result = 0;
    let denom = 1;
    for(let i = 0; i < n; i++){
      result += (1/denom);
      denom += 3;
    } return result.toFixed(2);
  }