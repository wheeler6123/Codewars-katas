/*Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"
If there are more than 6 petals, you start over with "I love you" and so on.

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.*/


//P: input will be will be a positive integer
//R: return the matching string to the corresponding petal at the end (6 string options)
//E: 7 => 'I love you'
  // 3 => 'a lot'
//P: function (numPetals){
  //create DB obj for key value pairs of petal : string
  //determine which number petal will be last based on input number and rounds of 6
  //return the phrase that corresponds with the last petal
//}


function howMuchILoveYou(nbPetals) {
    let lastPetal = nbPetals % 6;
    switch (lastPetal){
        case 1: 
          return 'I love you';
          break;
        case 2:
          return 'a little';
          break;
        case 3:
          return 'a lot';
          break;
        case 4:
          return 'passionately';
          break;
        case 5:
          return 'madly';
          break;
        case 0:
          return 'not at all';
          break;
    }    
}