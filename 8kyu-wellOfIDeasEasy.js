/*For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

*/


//P: input will be array consisting of strings either 'good' or 'bad'
//R: return 'Publish' if there are 1-2 'good' strings, 'I smell a series!' if there are more than 2 'good' strings, and 'Fail' if there are no 'good' strings
//E: ['bad', 'bad', 'bad'] => 'Fail!'
//P: function(x){
  //create var for good idea count
  //forEach loop through, increasing good idea count for 'good' strings
  //switch statement for 0 'good' ideas, 1-2, and 2+
//}



function well(x){
    let goodIdeas = 0;
    x.forEach (el => {
      if(el === 'good'){
        goodIdeas++
      }
    });
    if(goodIdeas === 0){
      return 'Fail!'
    } else if (goodIdeas === 1 || goodIdeas === 2){
      return 'Publish!'
    } else{
      return 'I smell a series!'
    }
  }