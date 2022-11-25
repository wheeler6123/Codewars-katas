/*Task
You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

Note: the scores will always be unique (so no duplicate values)

Examples
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []*/


//P: one input, an object containing a set of key:value pairs with strings represeting languages for keys, and an integer for test scores representing values for each
//R: return an array with the languages for which the test score is at least 60, in descending order of the scores
//E: {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
  // {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
//P: first, retrieve each key value pair from the object and place them into an array
  // sort the array of entries by score
  // filter the array to return only the entries with a minimum score of 60
  // return the keys from the array

  function myLanguages(results) {
    let entries = Object.entries(results);
    let sorted = entries.sort((a,b) => b[1] - a[1]);
    let finalScores = []
    sorted.forEach(sa => {
      if(sa[1] >= 60) finalScores.push(sa[0])
    })
    return finalScores
  }