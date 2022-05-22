/*Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'*/


//P: input will be two strings, each a name first representing person who enters, second representing owner's name
//R: return a greeting either for the boss or for a guest
//E: 'Daniel', 'Daniel' => 'Hello boss'
  //'Greg', 'Daniel' => Hello guest
//P: function (name1, name2){
  //check if person entering is the owner, if so return 'Hello boss' if not return 'Hello guest'
//}

const greet = (name1, name2) => name1 === name2 ? 'Hello boss' : 'Hello guest'