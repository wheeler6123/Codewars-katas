/*
I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

Example
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++

*/


//P: one input, an integer ranging from 1 - 50
//R: return a string that creates a shape as long and wide as the input integer
//E: 3 => '+++\n+++\n+++\n'
//P: the return should be a string of n plus signs, repeated n times, separated by new line chars \n
  // to do this, we can iterate a string concatenation loop, adding '+*n\n', then add one final +*n on for the last one, and return


  function generateShape(integer){
    let result = '';
    let frag = '';
    for(let i=1; i<=integer;i++){
        frag += '+'
    }
    for(let k = 1; k<integer; k++){
      result += `${frag}\n`;
    }
    return result+frag;
  }