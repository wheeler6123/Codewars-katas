/* 
When it's spring Japanese cherries blossom, it's called "sakura" and it's admired a lot. The petals start to fall in late April.

Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s), and it takes 80 seconds for the petal to reach the ground from a certain branch.

Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.

Notes:

The movement of the petal is quite complicated, so in this case we can see the velocity as a constant during its falling.
Pay attention to the data types.
If the initial velocity is non-positive, the return value should be 0
*/




//P: one input, an integer representing the velocity of a falling cherry blossom petal
//R: return the time it takes a blossom petal to fall at a given input velocity, from a branch 400cm high. if the velocity is negative, return 0
//E: 5 => 80
  // 10 => 40
  // -1 => 0
//P: check the velocity is greater than 0, if not return 0
  // if greater than 0, return 400/velocity



  const sakuraFall = v => v < 1 ? 0 : 400/v