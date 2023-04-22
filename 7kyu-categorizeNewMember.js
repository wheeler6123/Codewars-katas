/*
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
*/


//P: one input, an array of arrays where each subarray contains a players age and their handicap score
//R: return an array of strings for which division the player will be entered into, "Open" or "Senior", given their age and handicap
//E: [[45,12], [55,21], [19, -2]] => ['Open', 'Senior', 'Open', 'Senior']
//P: create an empty array to hold the results
  // iterate over input array, checking age and score for each player, pushing appropriate division string to results array
  // return arr


  function openOrSenior(data){
    let result = [];
    
    for(let i=0; i<data.length; i++){
      if(data[i][0] >= 55 && data[i][1] > 7){
        result.push('Senior');
      }else{
        result.push('Open')
      }
    }
    return result;
  }