/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.


*/

//P: one input, an array containing strings of names. array may be empty or of any length
//R: Return a string that will vary on the number of names in the array. If 0, 'no one likes this', if 1, '{name} likes this', if 2-3, '{name}, {name}, and {name} like this', if 4+ '{name}, {name} and {number - 2} others like this'
//E: [] => 'no one likes this'
  //['Peter'] => 'Peter likes this'
//P: use a conditional tho check the length of the names array, and then use template literals to pop the right names/number in as needed



function likes(names) {
    if(names.length < 1){
      return 'no one likes this'
    }else if(names.length < 2){
      return `${names[0]} likes this`
    }else if(names.length < 3){
      return `${names[0]} and ${names[1]} like this`
    }else if(names.length < 4){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }else{
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
  }