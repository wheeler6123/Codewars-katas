/*Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.*/


//P: input will be a string of text, with certain letters misrepresented as numbers (S,O,I => 5,0,1)
//R: return the string with the numbers replaced by the correct letters
//E: 'L0ND0N' => 'LONDON'
  //  'DUBL1N' => 'DUBLIN'
//P: function (string) {
  // create variable for to hold corrected string
  // set new string to equal input string replacing numbers with correct letters
  // return corrected string
//  }

function correct (s) {
    let chars = { '5':'S', '0':'O', '1':'I' };
    s = s.replace(/[501]/g, m => chars[m]);
    return s;
  }