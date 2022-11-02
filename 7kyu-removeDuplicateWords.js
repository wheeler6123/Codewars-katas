/*Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'*/



//P: one input, a string of words
//R: return the string removing any duplicate words
//E: 'alpha beta beta gamma gamma gamma delta alpha beta gamma gamma delta' => 'alpha beta gamma delta'
//P: create a set and join back into string


function removeDuplicateWords (s) {
    let noDupes = [...new Set(s.split(' '))];
    return noDupes.join(' ')
  }