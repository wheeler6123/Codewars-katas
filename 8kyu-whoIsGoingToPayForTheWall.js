// Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. He begins to solicit his neighbors to petition to get the association to build the wall. Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names. As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.

// Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is"

// P: program accepts one input, a string representing a name, could be empty
// R: program returns an array containing one or two strings. if the input name is more than 2 chars, the array contains a string using the full input name, as well as a string containing just the first two chars of the input name. If the input name is already 2 or fewer chars, simply return the input name string
// E: 'Mexico' => ['Mexico', 'Me']
//    'I' => ['I']
// P: Check length of input name, if less than 3 chars, return the input name within an array
//    If more than 2 chars, return an array containing the input string as well as the input string's first two chars using slice from 0 to 2

function whoIsPaying(name){
    if (name.length < 3) return [name];
    let truncated = name.slice(0,2);
    return [name,truncated];
  }