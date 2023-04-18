/*
A number is called Automorphic number if and only if its square ends in the same digits as the number itself.

Task
Given a number determine if it Automorphic or not .

Warm-up (Highly recommended)
Playing With Numbers Series
Notes
The number passed to the function is positive
Input >> Output Examples
autoMorphic (25) -->> return "Automorphic" 
Explanation:
25 squared is 625 , Ends with the same number's digits which are 25 .

autoMorphic (13) -->> return "Not!!"
Explanation:
13 squared is 169 , Not ending with the same number's digits which are 69 .

autoMorphic (76) -->> return "Automorphic"
Explanation:
76 squared is 5776 , Ends with the same number's digits which are 76 .

autoMorphic (225) -->> return "Not!!"
Explanation:
225 squared is 50625 , Not ending with the same number's digits which are 225 .

autoMorphic (625) -->> return "Automorphic"
Explanation:
625 squared is 390625 , Ends with the same number's digits which are 625 .

autoMorphic (1) -->> return "Automorphic"
Explanation:
1 squared is 1 , Ends with the same number's digits which are 1 .

autoMorphic (6) -->> return "Automorphic"
Explanation:
6 squared is 36 , Ends with the same number's digits which are 6


*/


//P: one input, a positive integer
//R: return a string of either 'Automorphic' or 'Not!!' for if the input num is automorphic (its square ends in the same last digits as the number itself, i.e. 25 => 625)
//E: 25 => 'Automorphic' (25 squared is 625)
  // 13 => 'Not!!' (13 squared is 169)
//R: square the input num, store in a variable
  // convert input and square to strings, then use the length of the input num str to create a slice of the square string equal to num of digits in input
  // if the input str matches the square substring, it's automorphic
  // return the correct string


  function automorphic(val){
    let square = val*val;
    let squareLastDigits = square.toString().slice(-(val.toString().length));
    if (val === Number(squareLastDigits)){
      return 'Automorphic'
    }else{
      return 'Not!!'
    }
  }