/*Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her?*/

//P: appears to always be a string with a name, first letter capitalized
//R: should return 'Hello, ${name}!' with exception of Johnny, who should return 'Hello, my love!'
//E: "Jim" => 'Hello, Jim!'
  //'Jane' => 'Hello, Jane!'
  //'Johnny' => 'Hello, my love!'
//P: function(name{
    //check if name === Johnny, if so return 'Hello, my love!'
    //if not name !== Johnny:
    //return `Hello, ${name}!`
//})

const greet = name => name==='Johnny' ? 'Hello, my love!' : `Hello, ${name}!`