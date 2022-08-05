/*Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

Example:

sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!*/



//P: 3 inputs, first an array with 2 elements first and last name, next a string for city, and finally a string for state
//R: return a greeting as such 'Hello, First Last! Welcome to City, State!'
//E: ['John', 'Smith'], 'Phoenix', 'Arizona') => 'Hello, John Smith! Welcome to Phoenix, Arizona!'
//P: use a template literal to build the string with variables in proper locations

const sayHello = (name,city,state) => `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`