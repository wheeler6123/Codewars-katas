/*Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"*/


//P: input will be a string containg all upper case letters, will never be empty
//R: return the complementary string of DNA matching A and T and C and G
//E: "ATTGC" --> "TAACG"
  // "GTAT" --> "CATA"
//P: declare a var that will hold the value of the input string split into individual chars
  // declare second var to hold array of complementary DNA chars
  // iterate through the input arr and use switch case to push complementary chars to new array
  // join new array and return string


  function DNAStrand(dna){
    let inputArr = dna.split('');
    let outputArr = [];
    for (let i = 0; i < inputArr.length; i++){
      switch (inputArr[i]){
          case 'A':
            outputArr.push('T');
            break;
          case 'T':
            outputArr.push('A');
            break;
          case 'C':
            outputArr.push('G');
            break;
          case 'G':
            outputArr.push('C');
            break;
      }
    }return outputArr.join('');
  }