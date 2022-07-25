/*If/else syntax debug
While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.

checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.

The function receives one parameter health which will always be a whole number between -10 and 10.*/



//P: input will be one number from -10 to 10, representing players health
//R: return boolean for whether or not they are alive based on whether or health is above 0
//E: 5 => true
  // 0 => false
//P: check for health greater than 0, return true if yes false if no


const checkAlive = health => health > 0 