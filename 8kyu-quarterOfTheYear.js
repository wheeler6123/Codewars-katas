/*Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.*/



//P: input will be integer from 1-12 representing a calendar month
//R: return the quarter of the year the month falls in
//E: 2 => 1
  // 6 => 2
  // 11 => 4
//P: function(month){
  //declare variable to hold value of quarter
  //switch statement to assign quarter to variable
  //return variable
//}

const quarterOf = month => {
    let quarter = 0;
    if (month == 1 || month == 2 || month == 3){
        quarter = 1;
    }else if (month == 4 || month == 5 || month == 6){
      quarter = 2;
    }else if(month == 7 || month == 8 || month == 9){
      quarter = 3;
    }else if (month == 10 || month == 11 || month == 12){
      quarter = 4
    }else{
      return 'Please enter a valid month 1-12'
    }
    return quarter;
  }