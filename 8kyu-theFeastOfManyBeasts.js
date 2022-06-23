/*All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.*/



//P: two strings will be input, first string is an animal and second is a dish
//R: boolean value for whether or not the dish starts and ends with the same letters the animal starts and ends with
//E: ("great blue heron", "garlic naan") => true
  //("brown bear", "bear claw") => false
//P:function (animal,dish){
  //return true/false for first & last letter of animal = first & last letter of dish


  const feast = (animal, dish) => animal[0] == dish[0] && animal[animal.length -1] == dish[dish.length - 1]