/*
There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims.

Example
alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!
*/


//P: one input, a string of lowercase letters
//R: using the provided score chart, return a string declaring either the Left or Right side the winner, or 'Let's fight again!' if it's a tie
//E: 'z' => 'Right side wins!'
  // 'w' => 'Left side wins!'
  // 'zw' => 'Let's fight again!'
//P: create two arrays, left and right, with the letters for each side inside
  // loop through string and add the scores to the corresponding side for each letter
  // return correct string based on outcome


  function alphabetWar(fight){
    let chars = fight.split('');
    let left = ['s','b','p','w'];
    let right = ['z','d','q','m'];
    let leftScore = 0;
    let rightScore = 0;
    
    for(let i = 0; i<chars.length; i++){
      if(left.includes(chars[i])){
        leftScore += left.indexOf(chars[i])+1;
      }else if(right.includes(chars[i])){
        rightScore += right.indexOf(chars[i])+1;
      }
    }
    
    if(leftScore > rightScore){
      return 'Left side wins!';
    }else if(leftScore < rightScore){
      return 'Right side wins!';
    }else{
      return "Let's fight again!"
    }
  }