/* 
Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.

Good luck :)


*/




//P: one input, a positive integer
//R: return the nearest square number, whether up or down. if the number input is square, return it
//E: 1 => 1
  // 2 => 1
  // 10 => 9
  // 111 => 121
  // 144 => 144
//P: first, check the input to see if it's square already and return if so
  // if not square, find the closest square up and down from the input, then check the difference between the two
  // return the square with the smaller difference



  function nearestSq(n){
    let upSquare = Math.ceil(Math.sqrt(n))
    let downSquare = Math.floor(Math.sqrt(n))
    console.log(upSquare, downSquare)
    if(upSquare === downSquare){
      return n
    }else{
      let upDiff = Math.pow(upSquare,2) - n
      let downDiff = n - Math.pow(downSquare,2)
      return upDiff < downDiff ? Math.pow(upSquare, 2) : Math.pow(downSquare, 2)
    }
}