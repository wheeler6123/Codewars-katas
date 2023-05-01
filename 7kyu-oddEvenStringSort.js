/*
Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

Note: 
0 is considered to be an even index. 
All input strings are valid with no spaces
input: 'CodeWars'
output 'CdWr oeas'

S[0] = 'C'
S[1] = 'o'
S[2] = 'd'
S[3] = 'e'
S[4] = 'W'
S[5] = 'a'
S[6] = 'r'
S[7] = 's'
Even indices 0, 2, 4, 6, so we have 'CdWr' as the first group
odd ones are 1, 3, 5, 7, so the second group is 'oeas'
And the final string to return is 'Cdwr oeas'


*/



//P: one input, a string
//R: a string, with even indexed chars on the left and odd indexed chars on the right, separated by a space
//E: 'CodeWars' => 'CdWr oeas'
//P: create an array of chars, then create two new arrays, one for evens and one for odds, set to equal the input arr filtered for the chars in corresponding indices
  // return a template literal with the two arrays joined, separated by a space


  function sortMyString(S) {
    let chars = S.split('');
    let evens = [];
    let odds = [];
    
    for(let i=0; i<chars.length; i++){
      if(i%2===0 || i === 0){
        evens.push(chars[i]);
      }else{
        odds.push(chars[i])
      }
    }
    return `${evens.join('')} ${odds.join('')}`
}