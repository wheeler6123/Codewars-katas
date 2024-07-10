// Ahoy matey!

// You are a leader of a small pirate crew. And you have a plan. With the help of OOP you wish to make a pretty efficient system to identify ships with heavy booty on board!

// Unfortunately for you, people weigh a lot these days, so how do you know if a ship is full of gold and not people?

// You begin with writing a generic Ship class / struct:

// class Ship {
//   constructor(draft, crew) {
//     this.draft = draft
//     this.crew = crew
//   }
// }
// Every time your spies see a new ship enter the dock, they will create a new ship object based on their observations:

// draft - an estimate of the ship's weight based on how low it is in the water
// crew - the count of crew on board
// const titanic = new Ship(15, 10);
// Task
// You have access to the ship "draft" and "crew". "Draft" is the total ship weight and "crew" is the number of humans on the ship.

// Each crew member adds 1.5 units to the ship draft. If after removing the weight of the crew, the draft is still more than 20, then the ship is worth looting. Any ship weighing that much must have a lot of booty!

// Add the method

// isWorthIt
// to decide if the ship is worthy to loot. For example:

// titanic.isWorthIt() // return false
// Good luck and may you find GOOOLD!

// P: Input value will be a Ship object, with two properties draft and crew. Both draft and crew will be integers greater than or equal to 0
// R: This program should return a boolean value for whether or not the weight of the ship minus the weight of the crew indicates whether or not the ship is likely to be worth looting. True if the net cargo weight is greater than 20, False if not
// E: [0,0] => False, this ship is empty and not worth looting
//    [100, 20] => True, the weight of the 20 crew is 30, so the net cargo weight is 70 which indicates this ship is worth looting
// P: We must add a method called isWorthIt to the Ship class, which will be a function that checks if the net cargo weight is greater than 20 and returns true or false as a result
//    To do so, we can subtract 20 from the draft and then check to see the remainder is greater than the crew value times 1.5

class Ship {
    constructor(draft, crew) {
      this.draft = draft
      this.crew = crew
      
    } 
    isWorthIt = function(){
        return this.draft - 20 > this.crew*1.5;
      }
  }