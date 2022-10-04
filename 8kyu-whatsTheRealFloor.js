/*Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

Write a function that given a floor in the american system returns the floor in the european system.

With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

Basements (negatives) stay the same as the universal level.

More information here

Examples
1  =>  0 
0  =>  0
5  =>  4
15  =>  13
-3  =>  -3*/



//P: input will be an integer, positive, negative, or 0
//R: return the european floor designation based on the input
//E: 1 => 0
  // 5 => 4
  // 15 => 13
  // -3 => -3
//P: function (n){
  //if statement parsing input floor, process the math (negative floors stay same, floors 0-13 subtract 1, above 13 subtract 2)
//}

const getRealFloor = n => n <= 0 ? n : n < 14 ? n - 1 : n - 2