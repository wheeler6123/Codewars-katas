// Given a point in a Euclidean plane (x and y), return the quadrant the point exists in: 1, 2, 3 or 4 (integer). x and y are non-zero integers, therefore the given point never lies on the axes.

// Examples
// (1, 2)     => 1
// (3, 5)     => 1
// (-10, 100) => 2
// (-1, -9)   => 3
// (19, -56)  => 4
// Reference
// QuadrantsQuadrants
// There are four quadrants:

// First quadrant, the quadrant in the top-right, contains all points with positive X and Y
// Second quadrant, the quadrant in the top-left, contains all points with negative X, but positive Y
// Third quadrant, the quadrant in the bottom-left, contains all points with negative X and Y
// Fourth quadrant, the quadrant in the bottom-right, contains all points with positive X, but negative Y

// P: two inputs, both non-zero integers, representing the x and y coordinates on a plane
// R: return an integer 1-4 representing the quadrant in which the given point lies on the plane
// E: (1,2) => 1, as this point lies in the upper right quadrant
//    (-10, 100) => 2, as this point lies in the upper left quadrant
//    (-1, -9) => 3, as this point lies in the lower left quadrant
//    (19, -56) => 4, as this point lies in the lower left quadrant
// P: use conditional logic to check whether or not the x and y coordinates are positive or negative to distinguish which quadrant the point lies in

function quadrant(x, y) {
    if(x > 0){
      if(y > 0){
        return 1;
      } else {
        return 4;
      }
    } else {
      if(y > 0){
        return 2;
      } else {
        return 3;
      }
    }
  }