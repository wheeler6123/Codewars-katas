/*Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x > y: 3 points
if x < y: 0 point
if x = y: 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4*/


//P: input will be array of scores given in 'x:y' format where x = our team's score and y = opponent's score
//R: tourney points, calculated as 3 points for a win, 1 point for a draw, and 0 points for a loss
//E: ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"] => 30
  //["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"] => 0
//P: function (results){
  //declare variable to hold total team points
  //create for loop to iterate through array
  //within for loop, create variables for our team score and opponent score
  //split each game result, test for winner
  //add points for win or draw to total team points variable, ignore losses
  //return final total team points
//}

function points(results){
    let tourneyPoints = 0;
    for (let i = 0; i < results.length; i++){
      let x = (results[i].split(':'))[0]
      let y = (results[i].split(':'))[1]
      if(x>y){
        tourneyPoints += 3;
      }else if (x===y){
        tourneyPoints += 1;
      }else{
        tourneyPoints = tourneyPoints;
      }
    }return tourneyPoints;
  }