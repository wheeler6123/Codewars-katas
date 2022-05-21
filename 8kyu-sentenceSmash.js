/*Sentence Smash
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'*/


//P: input will be array of word strings, may be empty or just single word
//R: take the word elements in input array and return a single string sentence comprised of each word in array
//E: [] => ''
    //['the'] => 'the'
    //['the', 'cat', 'ran', 'up', 'the', 'tree'] => 'the cat ran up the tree'
//P: function(arr){
    //join elements in array with a space between
    //return joined string

    const smash = words => words.join(' ')