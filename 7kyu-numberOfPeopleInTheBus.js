/*There is a bus moving in the city, and it takes and drop some people in each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

The second value in the first integer array is 0, since the bus is empty in the first bus stop.*/



//P: input is an array, containing a list of 2 element arrays. The first element in each array is the number of people getting on bus, second is people getting off
//R: return the number of people still on the bus after the last stop (array)
//E: [10,0], [3,5], [5,8] => 5
//P: use map to reduce each element in input to net gain/loss of riders
  // return the reduced sum of array


  var number = function(busStops){
    let net = busStops.map(el => el[0] - el[1]);
    return net.reduce((a,c) => a+c)
  }