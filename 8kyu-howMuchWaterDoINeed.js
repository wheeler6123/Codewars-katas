/*My washing machine uses water amount of water to wash load (in JavaScript and Python) or max_load (in Ruby) amount of clothes. You are given a clothes amount of clothes to wash. For each single item of clothes above the load, the washing machine will use 10% more water (multiplicative) to clean.

For example, if the load is 10, the amount of water it requires is 5 and the amount of clothes to wash is 14, then you need 5 * 1.1 ^ (14 - 10) amount of water.

Write a function howMuchWater (JS)/how_much_water (Python and Ruby) to work out how much water is needed if you have a clothes amount of clothes. The function will accept 3 arguments: - water, load (or max_loadin Ruby) and clothes.

My washing machine is an old model that can only handle double the amount of load (or max_load). If the amount of clothes is more than 2 times the standard amount of load (max_load), return 'Too much clothes'. The washing machine also cannot handle any amount of clothes less than load (max_load). If that is the case, return 'Not enough clothes'.

The answer should be rounded to the nearest 2 decimal places.*/

function howMuchWater(water, load, clothes){
    //P: water - given as whole integer, specifies amount of H2O needed to clean specified 'load'
      //load - given as whole integer, represents minimum load size to run washer, and half of max load size
      //clothes - given as whole integer, represents number of pieces of clothing. needs to be greater than load but not more than 2x load to run. If number of clothes is > load, will need 10% more water per piece above load
    //R: return the amount of water need to wash the number of clothes provided. If number of clothes is < load, return 'Not enough clothes' and if number of clothes > 2x load return 'Too much clothes'
    //E: howMuchWater(10,10,21) - amount of clothes is > 2x load, return 'Too much clothes'
      //howMuchWater(10,10,2) - amount of clothes < load, return 'Not enough clothes'
      //howMuchWater(10,10,11) - one additional piece of clothes should return 110% of water for load, or 11
    //P: function howMuchWater(w,l,c){
          //check if amount of clothes is too little or too great, if so return error message
    if(clothes<load){
      return 'Not enough clothes';
    }else if(clothes > 2*load){
      return 'Too much clothes';
      //if amount of clothes within spec, create math equation to determine how much water is needed 
      //how many pieces of clothes greater than initial load spec? increase water by 10% per additional item
    }else{
      let waterNeeded = (water*1.1**(clothes-load));
      //round waterNeeded to 2 decimals and return
      return  Math.round((waterNeeded + Number.EPSILON) * 100) / 100;
    }
  }