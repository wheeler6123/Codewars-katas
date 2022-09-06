/*The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.

39.99 becomes $39.99

The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).

Examples:

3 needs to become $3.00

3.1 needs to become $3.10
Good luck! Your team knows they can count on you!*/


//P: input will be a float
//R: return the float formatted to USD$
//E: 3 => $3.00
  // 3.1 => $3.10
//P: use the built-in functionality of javascripts intl number format to return the input in USD$


//this unfortunately doesn't work with this kata because the test does not want any commas used for figures above 1,000
/*const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const formatMoney = num => formatter.format(num)*/

const formatMoney = num => `$${parseFloat(num).toFixed(2)}`