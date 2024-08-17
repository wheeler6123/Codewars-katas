// Get ASCII value of a character.

// For the ASCII table you can refer to http://www.asciitable.com/

// P: program accepts one input, a string containing a single character
// R: program should return an integer representing the ASCII value for the input char
// E: 'A' => 65
//    ' ' => 32
//    '!' => 33
// P: this can be achieved using the built-in string method charCodeAt

const getASCII = c => c.charCodeAt(0);