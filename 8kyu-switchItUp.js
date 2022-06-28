/*When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement.*/


//P: input will be integer from 0-9
//R: return string with numerical input represented by its word description with first letter capitalized, suggested to use switch statement
//E: '1' => 'One'
//P: function (num){
  //switch statement for 0-9; default enter a valid number 0-9
//}

function switchItUp(num){
    switch (num) {
        case 1:
          return 'One'
          break;
        case 2:
          return 'Two'
          break;
        case 3:
          return 'Three'
          break;
        case 4:
          return 'Four'
          break;
        case 5:
          return 'Five'
          break;
        case 6:
          return 'Six'
          break;
        case 7:
          return 'Seven'
          break;
        case 8:
          return 'Eight'
          break;
        case 9:
          return 'Nine'
          break;
        case 0:
          return 'Zero'
          break;
        default:
          return 'Enter a valid number 0-9'
    }
  }