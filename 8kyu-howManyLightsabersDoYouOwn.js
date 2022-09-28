/*Inspired by the development team at Vooza, write the function that

accepts the name of a programmer, and
returns the number of lightsabers owned by that person.
The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

Note: your function should have a default parameter.

For example(Input --> Output):

"anyone else" --> 0
"Zach" --> 18*/


//P: input will be a string representing a persons name
//R: if the person is Zach, return 18 for the number of lightsabers they own. If anyone else, return 0
//E: 'John' => 0
  // 'Zach' => 18
//P: if 'Zach' => 18, else => 0


const howManyLightsabersDoYouOwn = name => name === 'Zach' ? 18 : 0