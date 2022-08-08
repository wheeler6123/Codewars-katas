/*Complete the function that receives as input a string, and produces outputs according to the following table:

Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
anything else	"Beer"
Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".*/



//P: input will be a string representing a profession
//R: return a string for the correct drink according to the key provided
//E: 'programmer' => 'Hipster Craft Beer'
  // 'rapper' => 'Cristal'
  // 'doctor' => 'Beer'
//P: create an object collection with the given key value pairs
  // check if the param input matches a key in the drinks collection, if not, return 'Beer'
  // else return the appropriate drink

  const drinks = {
    jabroni:	"Patron Tequila",
    "school counselor":	"Anything with Alcohol",
    programmer:	"Hipster Craft Beer",
    "bike gang member":	"Moonshine",
    politician:	"Your tax dollars",
    rapper: "Cristal"
  }
  
  
  function getDrinkByProfession(param){
    let drink = 'Beer';
    let profession = param.toLowerCase();
    if (drinks.hasOwnProperty(profession)){
      drink = drinks[profession];
    }return drink;
  }