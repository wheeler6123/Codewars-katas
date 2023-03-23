/*
Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
If a and b have the same length treat a as the longer producing b+reverse(a)+b
*/


//P: two input params, both strings, a and b. May be empty, may be same length, may be different lengths
//R: determine if one string is shorter than the other, if so return a string of shorter+reverse longer+shorter. If same length, treat a as the longer string
//E: 'first', 'abcde' => 'abcdetsrifabcde'
  // 'hello', 'bau' => 'bauollehbau'
//P: determine which string is long vs short
  // reverse the long string
  // concat short+revLong+short and return


  function shorter_reverse_longer(a,b){
    let long, short;
    
    if(a.length>b.length || a.length===b.length){
      long = a;
      short = b;
    }else{
      long = b;
      short = a;
    }
    
    let revLong = long.split('').reverse().join('');
    
    return `${short}${revLong}${short}`
  }
