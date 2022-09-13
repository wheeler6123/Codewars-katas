//Complete the function which converts hex number (given as a string) to a decimal number.


//P: input will be a string representing a hex number
//R: return the input hex number as a decimal number
//E: '1' => 1
  // 'a' => 10
//P: use parseInt with base 16 to convert the hex string to a decimal number

const hexToDec = hex => parseInt(hex,16)