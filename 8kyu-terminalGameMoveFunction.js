/*Terminal game move function
In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

Example:
move(3, 6) should equal 15*/


//P: two inputs, both integers, first represents current position on board, second represents the roll of the dice
//R: return the final position of the player, after moving 2x the number of spaces indicated from the die and starting from the initial position
//E: (3,6) => 15 (starting from 3, moving 12 spaces (6x2))
//P: function(p,r){
  //double the roll for the number of spaces to add, add it to current position and return
//}

const move = (p,r) => r*2 + p