/*After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).*/


//P: input will be an integer representing number of days of rental
//R: return total cost of rental for given input number of days, factoring in discounts for length
//E: 1 => 40
  //2 => 80
  //3 => 100
  //7 => 230
//P: function(days){
  //declare variable for total cost
  //use if/else loop to return variable with total cost for less than 3 days, 3-6 days, and 7 plus days
//}

function rentalCarCost(days){
    let cost = 0;
    let baseRate = days*40
    if(days < 3){
      cost = baseRate;
    }else if (days >= 3 && days < 7){
      cost = baseRate - 20;
    }else {
      cost = baseRate - 50;
    }
    return cost;
  }