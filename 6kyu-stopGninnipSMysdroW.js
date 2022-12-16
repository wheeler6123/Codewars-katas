/* 
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"
*/



//P: one input, a string that will contain at least one word
//R: return a string, reversing any words in the original string that have 5 or more letters
//E: 'Welcome' => 'emocleW'
  // 'Hey fellow warriors' => 'Hey wollef sroirraw'
//P: use split to create an array of each word in the original string
    // iterate through the array, checking the length of each word. use a callback function so that if the word is 5 or more letters, it will be split, reversed, and joined before being added back into the array
    // join the words in the array back into a string and return it


    function spinWords(string){
        let words = string.split(' ');
        let reversed = words.map(word => word.length < 5 ? word : word.split('').reverse().join(''))
                                 
        return reversed.join(' ')
    }