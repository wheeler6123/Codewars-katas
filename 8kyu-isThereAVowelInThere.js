// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

// P: program accepts one input, an array of integer vals
// R: return an array, with any char codes in the input array that correspond to lower case vowels converted to the corresponding char
// E: [101,121,110,113,113,103,121,121,101,107,103] => ['e',121,110,113,113,103,121,121,'e',107,103]
// P: create a const object called vowels, with the char codes as keys and chars as values
//    iterate through input array checking if the val is in the vowels object, if so replace that element with the char
//    return resulting array

const vowels = {
    97: 'a',
    101: 'e',
    105: 'i',
    111: 'o',
    117: 'u'
  }
  function isVow(a){
    for(let i = 0; i < a.length; i++){
      if(vowels[a[i]]){
        a[i] = vowels[a[i]];
      }
    }
    return a;
  }