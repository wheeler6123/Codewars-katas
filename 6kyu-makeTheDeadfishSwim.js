/*
Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]
*/


//P: one input, a string consisting of lowercase characters in various order: i = increments value, d = decrements value, s = squares value, 0 outputs value to return array
//R: parse the characters in the input string and return an array containing the value(s) specified by the input chars
//E: parse("iiisdoso") => [ 8, 64 ]
//P: use forEach to loop through string chars and use helper func to perform specified action
  // return result after loop completes

// Return the output array, and ignore all non-op characters

function parse( data ) {
    let result = [];
    let value = 0;
    let instructions = [...data]
    
    for(let i = 0; i<instructions.length; i++){
      let e = instructions[i];
      if(e === 'i'){
        value++
      }else if(e === 'd'){
        value--
      }else if(e === 's'){
        value = value*value
      }else if(e === 'o'){
        result.push(value)
      }
    }
    return result
  }