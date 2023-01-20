/* 
Complete the function which returns the weekday according to the input number:

1 returns "Sunday"
2 returns "Monday"
3 returns "Tuesday"
4 returns "Wednesday"
5 returns "Thursday"
6 returns "Friday"
7 returns "Saturday"
Otherwise returns "Wrong, please enter a number between 1 and 7"
*/



//P: one input, a positive integer
//R: return the correct day of the week corresponding to the number (starting with 1 = Sunday) or "Wrong, please enter a number between 1 and 7" if the number is not in range
//E" 1 => 'Sunday'
  // 6 => 'Friday'
  // 20 => 'Wrong, please enter a number between 1 and 7'
//P: use a switch statement to return the correct day of the week or the default if input is not valid

function whatday(num) { 
    switch (num) {
        case 1:
          return 'Sunday';
        case 2:
          return 'Monday';
        case 3:
          return 'Tuesday';
        case 4:
          return 'Wednesday';
        case 5:
          return 'Thursday';
        case 6:
          return 'Friday';
        case 7:
          return 'Saturday';
        default:
          return 'Wrong, please enter a number between 1 and 7'
    }
  }