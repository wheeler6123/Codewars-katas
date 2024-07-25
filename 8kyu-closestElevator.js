// Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator accepting 3 arguments (in order):

// left - The current floor of the left elevator
// right - The current floor of the right elevator
// call - The floor that called an elevator
// It should return the name of the elevator closest to the called floor ("left"/"right").

// In the case where both elevators are equally distant from the called floor, choose the elevator to the right.

// You can assume that the inputs will always be valid integers between 0-2.

// Examples:

// elevator(0, 1, 0); // => "left"
// elevator(0, 1, 1); // => "right"
// elevator(0, 1, 2); // => "right"
// elevator(0, 0, 0); // => "right"
// elevator(0, 2, 1); // => "right"

// P: program accepts 3 inputs, all valid integers between 0 and 2. The first is the current floor of the left elevator, the second is the current floor of the right elevator, and the third is the floor that called the elevator
// R: program returns a string of either 'right' or 'left', referring to the elevator closest to the called floor. if the distance is equal, default to the right elevator
// E: 0,1,0 => left
//    0,1,1 => right
//    0,1,2 => right
//    0,0,0 => right
//    0,2,1 => right
// P: assume three inputs are l, r, and c
//    since we default to the right, we can check c against r first, if they are equal return right
//    if c is not equal to r, check if c equals l, and if so, return l
//    if is equal to neither l or r, we need to check the distance between the 2, using absolute values
//    if one distance is greater than the other, we return the corresponding left or right with the shortest distance, otherwise, we return right if they are equal

function elevator(l,r,c){
    if(c == r) return 'right';
    if(c == l) return 'left';
    let lDistance = Math.abs(l-c);
    let rDistance = Math.abs(r-c);
    if(lDistance < rDistance) return 'left';
    return 'right';
  }