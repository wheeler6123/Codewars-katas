/* 
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/


//P: one input a string containing only alphabet characters and numeric digits
//R: return the number of unique chars/nums THAT OCCUR MORE THAN ONCE in the string, ignoring case
//E: 'abcde' => 0 (no recurring chars)
  //'aabbcde' => 2
  //'aabBcde' => 2
//P: first


function duplicateCount(str){
    let allLowers = str.split('').map(char => char.toLowerCase())
    let dupes = allLowers.filter(char => allLowers.indexOf(char) !== allLowers.lastIndexOf(char))
    const noDupeDupes = [...new Set(dupes)]
    return noDupeDupes.length
  }