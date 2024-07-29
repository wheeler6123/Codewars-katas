// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have attributes x and y.

// Write a function calculating distance between Point a and Point b.

// Input coordinates fit in range 
// −
// 50
// ⩽
// x
// ,
// y
// ⩽
// 50
// −50⩽x,y⩽50. Tests compare expected result and actual answer with tolerance of 1e-6.

// P: program accepts two inputs, both objects containing an x and y coordinate representing a single point
// R: program returns an int, possibly using float, representing the distance between the two given points
// E: (3,3),(3,3) => 0
//    (1,6),(4,2) => 5
//    (-10.2, 12.5),(0.3,14.7) => 10.728001
// P: calculate the value of the difference starting by taking the difference between a.x and b.x, then a.y and b.y
//    square the results of two results above, then add the 2 squares together
//    return the square root of the sum above

function distanceBetweenPoints(a, b) {
    let xDistance = b.x - a.x;
    let yDistance = b.y - a.y;
    xDistance = xDistance*xDistance;
    yDistance = yDistance*yDistance;
    return Math.sqrt(xDistance+yDistance);
  }