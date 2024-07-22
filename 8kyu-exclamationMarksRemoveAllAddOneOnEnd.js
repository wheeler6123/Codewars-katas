// Description:
// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

// Examples
// "Hi!"     ---> "Hi!"
// "Hi!!!"   ---> "Hi!"
// "!Hi"     ---> "Hi!"
// "!Hi!"    ---> "Hi!"
// "Hi! Hi!" ---> "Hi Hi!"
// "Hi"      ---> "Hi!"

// P: one input, a non-empty string
// R: remove all of the exclamation points from the input string, return the string with one exclamation point at the end
// E: '!Hi!' => 'Hi!'
// P: use regex to remove all exclamation points
//    add an exclamation point to the end of the cleaned up string
//    return the string


function remove (string) {
    let filteredString = string.replace(/\!/g, "");  
    return filteredString + '!';
  }