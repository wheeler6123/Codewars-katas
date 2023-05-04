/*
In John's car the GPS records every s seconds the distance travelled from an origin (distances are measured in an arbitrary but consistent unit). For example, below is part of a record with s = 15:

x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]
The sections are:

0.0-0.19, 0.19-0.5, 0.5-0.75, 0.75-1.0, 1.0-1.25, 1.25-1.50, 1.5-1.75, 1.75-2.0, 2.0-2.25
We can calculate John's average hourly speed on every section and we get:

[45.6, 74.4, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0]
Given s and x the task is to return as an integer the *floor* of the maximum average speed per hour obtained on the sections of x. If x length is less than or equal to 1 return 0 since the car didn't move.

Example:
With the above data your function gps(s, x) should return 74
*/


//P: two inputs, s being a given number of seconds, and x being an array containing the measurements for total elapsed distance every s seconds for a journey
//R: return the floor for the max average speed per hour obtained on the sections of x. if x length is less than or equal to 1 return 0 since the car didn't move
//E: s = 15, x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25] => 74
//P: create a new array, populated with the average speed for each section in the input array x
  // sort the average speed array, then return the Math.floor() for the fastest speed

  function speed(d,t){
    return (3600*d)/t
  }
  
  function gps(s,x){
    console.log(s,x)
    if(x.length < 2){
      return 0;
    }else{
      let speeds = [];
      x.forEach((e,i) => {
        d = e - (x[i-1] || 0);
        speeds.push(speed(d,s));
      });
      console.log(speeds);
      return Math.floor(speeds.sort((a,b) => b-a)[0])
    }  
  }