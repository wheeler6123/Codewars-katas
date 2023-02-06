/* 
You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

You can not use multiplier "*" operator.

If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).
*/



//P: will be given 2 inputs, first is a string representing a name, second will either be given as a price per character or will use a default value of 30
//R: return the cost of printing the input name on the billboard at the given cost per char, including spaces
//E: 'John Wheeler' => 360 (12x30)
  // 'John Wheeler', 20 => 240 (12x20)
//P: can't use multiplier operator, so will need to add the cost of each char and return the sum


function billboard(name, price = 30){
    let sum = 0;
    for(let i = 0; i < name.length; i++){
      sum += price;
    }
    
    return sum
  }