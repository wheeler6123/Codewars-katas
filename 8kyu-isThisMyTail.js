/*Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

If the tail is right return true, else return false.

The arguments will always be non empty strings, and normal letters.*/



//P: input will be 2 strings, the first describing and animal and the second a single letter
//R: return a boolean value for whether or not the single letter matches the last letter in the first string
//E: fox, x => true
  // rhino, o => true
  // dog, d => false
//P: just check if the last index of the first string is equal to the second string


const correctTail = (a,t) => a[a.length-1] === t