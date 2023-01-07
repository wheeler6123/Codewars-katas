/* 
This program tests the life of an evaporator containing a gas.

We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

The program reports the nth day (as an integer) on which the evaporator will be out of use.

Example:
evaporator(10, 10, 5) -> 29
Note:
Content is in fact not necessary in the body of the function "evaporator", you can use it or not use it, as you wish. Some people might prefer to reason with content, some other with percentages only. It's up to you but you must keep it as a parameter because the tests have it as an argument.
*/



//P: 3 inputs, each positive integers, representing initial amount of content, the rate of evap per day, and the threshold at which the product is no longer useful
//R: return an integer representing the day the evaporator will be out of use
//E: 10,10,5 => 29
  // 10,10,10 => 22
//P: just have to find how many times we have to multiply 100 by the evap rate until it falls below the threshold amount


function evaporator(content, evapPerDay, threshold){ 
    let days = 0;
    let remaining = 100
    
    while(remaining >= threshold){
      remaining = remaining*(1 - (evapPerDay/100));
      days++;
    }
    
    return days
  }