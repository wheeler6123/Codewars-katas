/*Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"*/


//P: one input, a string of various length containing words which may or may not be repeated
//R: return a string with all consecutive duplicates removed
//E: "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta" --> "alpha beta gamma delta alpha beta gamma delta"
//P: first, split the string on spaces to create an array of all the words in the string
  // iterate through the array, checking if each index matches the index before it, if so remove the duplicate

  const removeConsecutiveDuplicates = s => s.split(' ').filter((el,i,arr) => i === 0 || arr[i] != arr[i-1]).join(' ')