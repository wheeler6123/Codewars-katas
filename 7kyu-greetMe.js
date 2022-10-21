/*Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"*/


//P: input will be one string, representing a name with various letter casing
//R: return a string saying 'Hello Name!'
//E: 'riley' => 'Hello Riley!'
//P: declare a var to hold the first letter of the name, set to upper case
  // declare a var to hold the remainder of the name, set to lower case
  // return a template literal inserting the capital letter of the name and remainder in lowercase into the greeting format

  const greet = name => `Hello ${name[0].toUpperCase()+name.slice(1).toLowerCase()}!`