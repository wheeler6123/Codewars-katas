/* 
At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].
*/



//P: one input, an array of positive integers representing the ages of family members
//R: return an array containing the youngest age, oldest age, and difference in ages
//E: [82,15,6,38,35] => [6,82,76]
  // [57,99,14,32] => [14,99,85]
//P: sort the input array to get the ages in ascending order
  // assign youngest and oldest ages to variables
  // return an array containing the youngest var, oldest var, and the difference between the two




  function differenceInAges(ages){
    let sorted = ages.sort((a,b) => a-b)
    let youngest = sorted[0]
    let oldest = sorted[sorted.length -1]
    return [youngest, oldest, oldest-youngest]
  }