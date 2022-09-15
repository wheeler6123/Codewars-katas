/*The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

All inputs will be integers. Please return an integer. Round down.*/


//P: 3 inputs, all integers, first being normal price, second being discount amount (%), third being cost of vacation
//R: how many bottles of whiskey would you need to buy to save enough at the discount price to pay for the cost of vacation
//E: 12, 50, 1000 => 166
  // 24, 35, 3000 => 357
  // 17, 10, 500 => 294
//P: determine the savings per bottle from discount
  // divide cost of vacation by savings per bottle and return the minimum number of bottles you'd have to buy to cover the cost


  const dutyFree = (p,d,v) => Math.floor(v/(p*(d/100)))