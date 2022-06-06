/*Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"*/


//P: string of firstName LastName
//R: string reverse to LastName firstName
//E: 'john McClane' => 'McClane john'
//P: function(name){
  //return split name at space, reversed, and joined back with space
//}

const nameShuffler = name => name.split(' ').reverse().join(' ')