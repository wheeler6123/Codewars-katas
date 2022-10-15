//Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.




//P: input will be two integers, the first representing players current health and second the amount of damage received in a hit
//R: return an integer representing the players health after the latest hit. Health cannot be negative
//E: 100, 5 => 95
  // 92, 8 => 84
  // 20, 30 => 0 
//P: check if health - damage is less than 0, if so return 0 otherwise return health-damage



function combat(health, damage) {
    return health - damage <= 0 ? 0 : health - damage
}