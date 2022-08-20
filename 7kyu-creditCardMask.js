/*Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"

"Skippy" --> "##ippy"

"Nananananananananananananananana Batman!"
-->
"####################################man!"*/


//P: input will be a string, may contain letters, integers, or special characters
//R: return a string, with the same length as input string but all of the characters except the last 4 replaced with #
//E: "4556364607935616" --> "############5616"
  // "64607935616" -->      "#######5616"
        //    "1" -->                "1"
            // "" -->                 ""
//P: declare var to hold result string
  // check that string is at least 5 characters long, if less, simply return input string
  // if length is at least 5, use a for loop to iterate through the characters, stopping before the last 4 and adding a '#' for each character iterated over
  // return the string of '#' and concatenat with a substring of the last 4 chars from input


  function maskify(cc) {
    let res = '';
    if(cc.length < 5){
      res = cc;
    }else {
      for(let i = 0; i < cc.length - 4; i++){
        res += '#'
      }
      res += cc.substring(cc.length - 4)
    } return res;
  }