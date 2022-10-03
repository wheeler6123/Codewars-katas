/*There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

number of pillars (≥ 1);
distance between pillars (10 - 30 meters);
width of the pillar (10 - 50 centimeters).
Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).*/


//P: three inputs - number of pillars min 1, distance between pillars in m (distance will be consistent for all pillars), and width of the pillar in cm (also consistent across all pillars)
//R: return the distance in cm between the two interior walls of the outermost pillars
//E: (1,10,10) => 0, only 1 pillar no distance to another
  // (2,20,25) => 2000 since there are only two pillars, the distance is the distance between the two pillars given in param 2
//P:function(n,d,w){
  // check number of pillars, if 1 return 0, if 2 return d
  // if >2 pillars, multiply distance * 100 to convert to cm then multiply * n-1. add to ((n-2) * w) and return
//}

const pillars = (n,d,w) => n === 1 ? 0 : n === 2 ? d*100 : (((d*100)*(n-1))+((n-2)*w))