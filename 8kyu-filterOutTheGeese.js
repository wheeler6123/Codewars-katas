



//P: input will be array containing a collection of strings
//R: filtered array with all geese removed
//E: ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"] => ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
//P: function (birds){
  //create var for filtered array
  //iterate through input array, pushing any birds not found in geese collection to new array
  //return filtered array
//}


function gooseFilter (birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    return birds.filter(bird => !geese.includes(bird));
  };