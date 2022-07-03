/*Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
If he doesn't get 10 hoops, return the string "Keep at it until you get it".*/


//P: input param is one (n) representing a positive integer
//R: if input param is 10 or more, return "Great, now move on to tricks", else return "Keep at it until you get it"
//E: n = 10 => "Great, now move on to tricks"
  // n = 8 => "Keep at it until you get it"
//P: just need basic if/else statement
    //function (n) {
  //  if(n>=10){
  //    return "Great, now move on to tricks"
  //  } else {
  //      return "Keep at it until you get it"
  //  }
  // }

  let hoopCount = n => n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"