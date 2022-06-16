/*You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow.*/



//P: input will be string, representing 1 of 3 light phases 
//R: return the light that follows the input string
//E: 'green' => 'yellow'
  //'red' => 'green'
//: function ('light'){
  //check for input, return string that follows
//}

const updateLight = light => light.length < 4 ? 'green' : light.length < 6 ? 'yellow' : 'red'