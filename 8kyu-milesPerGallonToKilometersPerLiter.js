/* 
Sometimes, I want to quickly be able to convert miles per imperial gallon into kilometers per liter.

Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

Make sure to round off the result to two decimal points.

Some useful associations relevant to this kata: 1 Imperial Gallon = 4.54609188 litres 1 Mile = 1.609344 kilometres
*/


//P: one input, an integer representing miles per imperial gallon
//R: return the mpg converted into kilometers per liter
//E: 10 => 3.54
  // 20 => 7.08
//P: return the result of converting gallons to liters, then miles to kilometers, as an integer with 2 decimals


function converter(mpg){
    return Number((mpg/4.54609188*1.609344).toFixed(2))
  }