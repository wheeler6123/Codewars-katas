/* 
Hey awesome programmer!

You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

Therefore you need a method, which returns the smallest unused ID for your next new data item...

Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

Go on and code some pure awesomeness!
*/



//P: one input, an array of integers unsorted
//R: return the lowest available next id given the input data
//E: [0,1,2,3,5] => 4
  //[0,1,2,3,4,5,6,7,8,9,10] => 11
  // [1,2,0,2,3,5] => 4
//P: first create a new set from the input array and sort in ascending order
  //check the first element in array to make sure 0 has been used, if not, use 0
  //check the array to find the first non-consecutive (i.e. the first missing integer) and return that missing integer


  function nextId(ids){
    let uniqueIds = [... new Set (ids.sort((a,b) => a-b))]
    if(uniqueIds[0] !== 0){return 0}
     for(let i = 0; i < uniqueIds.length; i++){
       let current = uniqueIds[i]
       if(current + 1 !== uniqueIds[i+1]){
         return current + 1
       }
     }
   }