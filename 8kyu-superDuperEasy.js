//Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".


//P: one input, should be an integer but may be a string
//R: If input is a string, return 'Error' otherwise return an integer for the input multiplied by 50 and adding 6
//E: 1 => 56
  // 2 => 106
  // '' => 'Error'
//P: check if the typeof input is number
  // if yes, return number*50 + 6, if not, return 'Error'


  const problem = x => typeof x === 'number' ? x*50 + 6 : 'Error'