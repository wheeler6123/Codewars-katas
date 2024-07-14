// You have an award-winning garden and every day the plants need exactly 40mm of water. You created a great piece of JavaScript to calculate the amount of water your plants will need when you have taken into consideration the amount of rain water that is forecast for the day. Your jealous neighbour hacked your computer and filled your code with bugs.

// Your task is to debug the code before your plants die!

// P: one input, an integer, greater than or equal to zero, representing the amount of rainfall in millimeters
// R: return a string, telling the user either "You need to give your plant Xmm of water" or "Your plant has had more than enough water for today!" depending on how much rain has fallen and the need for the plants to get 40mm of water a day
// E: 100 => "Your plant has had more than enough water for today!" as the 100mm of rain has exceeded the 40mm needed
//    39 => "Your need to give your plant 1mm of water" as there is still a need for 1mm to hit the target of 40mm after 39mm of rain has fallen
// P: Fix the bug in the code base provided to make the code work

// Provided starting code:
// function rainAmount(mm){
//     if (rainAmount = 40) {
//          return "You need to give your plant " + {rainAmount - 40} + " mm of water"
//     };
//     if else {
//          return "Your plant has had more than enough water for today!"
//     };
// }

function rainAmount(mm){
    if (mm < 40) {
         return "You need to give your plant " + (40-mm) + "mm of water"
    } else {
         return "Your plant has had more than enough water for today!"
    };
}