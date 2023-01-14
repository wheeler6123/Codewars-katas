/* 
Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.

Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

"..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.

Good Luck!
*/



//P: two inputs, both positive, the first representing birth year and the second the year in which you wish to know the age
//R: return a formatted sentence string based on the proper grammatical response given the input params
//E: 2012, 2016 => 'You are 4 years old.'
  // 2000, 2090 => 'You are 90 years old.'
  // 2000, 1990 => 'You will be born in 10 years.'
  // 3400, 3400 => 'You were born this very year!'
  // 2011, 2012 => 'You are 1 year old.'


  function  calculateAge(b,c) {
    const age = c - b
    if(age < -1){
      return `You will be born in ${Math.abs(age)} years.`
    }else if(age === -1){
      return `You will be born in 1 year.`
    }else if (age === 0){
      return `You were born this very year!`
    }else if(age === 1){
      return `You are 1 year old.`
    }else{
      return `You are ${age} years old.`
    }
  
  }