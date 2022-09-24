/*Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1
If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array.

Examples
Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

Input: ["sheep", "sheep", "wolf"]
Output: "Pls go away and stop eating my sheep"*/



//P: input will be array of strings all 'sheep' except for one 'wolf'
//R: Return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep in front of the wolf. If the wolf is behind you, return 'Pls go away and stop eating my sheep'
//E: ["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"] => "Oi! Sheep number 2! You are about to be eaten by a wolf!"
//P: declare var for n
  //set n to the value of the length-1 of the que minus the index of 'wolf'
  //if n is 0, return the string telling wolf to go away, otherwise return the string with n filled in
		

  function warnTheSheep(queue) {
    let n = (queue.length -1) - queue.indexOf('wolf');
    return (n === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${n}! You are about to be eaten by a wolf!`);
  }