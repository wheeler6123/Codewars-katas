/*Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
  or `name` = ""        => return "Hello, World!"*/


//P: input is a string, may be empty or may return a name with various capitalization or lack thereof
//R: return a greeting, if a name is present return 'Hello, {name}!' with the name being corrected to proper format, or 'Hello, World' if the input is empty
//E: With `name` = "john"  => return "Hello, John!"
  // With `name` = "aliCE" => return "Hello, Alice!"
  // With `name` not given or `name` = ""        => return "Hello, World!"
//P: check if input empty, if so, return 'Hello, World!'
  // if name present, convert name to proper format and return 'Hello, {name}!'

  function hello(name) {
    if (!name){
      return 'Hello, World!';
    }else{
      let formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
      return `Hello, ${formattedName}!`
    }
  }