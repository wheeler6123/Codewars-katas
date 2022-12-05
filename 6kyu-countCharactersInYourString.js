/*The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.*/


//P: one input, a string, may be empty
//R: return an object, with the count for each char in the input string. If empty, return empty object
//E: 'aba' => {'a': 2, 'b': 1}
  // '' => {}
//P: //create an empty object with inherited properties
  // for each character in the string, check if a count already exists, if not set it to 0
  // set the property value to current count + 1 (current count will be 0 if it did not already exist)
  // return the object

  function count (string) {  
    const counts = Object.create(null);
    
    for (ch of string){
      const count = counts[ch] ?? 0;
      counts[ch] = count + 1;
    }
    return counts;
  }